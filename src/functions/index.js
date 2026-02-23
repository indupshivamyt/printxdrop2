import * as functions from "firebase-functions";
import admin from "firebase-admin";
import Razorpay from "razorpay";
import crypto from "crypto";

admin.initializeApp();

const razorpay = new Razorpay({
    key_id: functions.config().razorpay.key_id,
    key_secret: functions.config().razorpay.key_secret
});

// 🔹 Create Razorpay order
export const createRazorpayOrder = functions.https.onCall(async (data, context) => {
    const { amount, orderId } = data;

    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'Login required');
    }

    const options = {
        amount: amount, // in paise: ₹10 → 1000
        currency: "INR",
        receipt: orderId,
    };

    try {
        const order = await razorpay.orders.create(options);
        return { orderId: order.id, amount: order.amount, currency: order.currency };
    } catch (err) {
        throw new functions.https.HttpsError('unknown', err.message);
    }
});

// 🔹 Verify Razorpay payment
export const verifyPayment = functions.https.onCall(async (data, context) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = data;

    const generated_signature = crypto
        .createHmac("sha256", functions.config().razorpay.key_secret)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

    if (generated_signature !== razorpay_signature) {
        throw new functions.https.HttpsError('failed-precondition', 'Payment verification failed');
    }

    // Payment verified → update Firestore order
    await admin.firestore().collection("orders").doc(orderId).update({
        status: "paid",
        paymentId: razorpay_payment_id,
        paidAt: admin.firestore.FieldValue.serverTimestamp()
    });

    return { success: true };
});