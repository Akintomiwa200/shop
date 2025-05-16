
import { usePaystackPayment } from '@paystack/inline-js';
import { useUser } from '../../context/UserContext';

const PaystackButton = ({ amount, onSuccess, onClose }) => {
    const { user } = useUser();
    
    const config = {
        reference: new Date().getTime().toString(),
        email: user?.email,
        amount: amount * 100, // Convert to kobo
        publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    };

    const initializePayment = usePaystackPayment(config);

    return (
        <button
            onClick={() => initializePayment(onSuccess, onClose)}
            className="w-full bg-green-600 text-white p-2 rounded"
        >
            Pay ₦{amount.toLocaleString()}
        </button>
    );
};

export default PaystackButton;
