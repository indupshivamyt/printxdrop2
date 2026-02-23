import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase"; // your firebase app instance

export const createOrder = async (amount, orderId) => {
    const createOrderFn = httpsCallable(functions, 'createRazorpayOrder');
    return (await createOrderFn({ amount: amount * 100, orderId })).data;
};

export const verifyPayment = async (paymentData) => {
    const verifyFn = httpsCallable(functions, 'verifyPayment');
    return (await verifyFn(paymentData)).data;
};