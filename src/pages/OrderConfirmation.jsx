import { Link } from 'react-router'

const OrderConfirmation = () => {
    return (
        <div className="text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                <svg
                    className="w-16 h-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                </svg>
                <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
                <p className="mb-6">Thank you for your purchase. Your order has been received.</p>
                <Link
                    to="/"
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default OrderConfirmation