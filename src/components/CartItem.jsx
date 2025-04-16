import React from 'react'
import {AiFillDelete} from "react-icons/ai";

const buttonStyle = "px-5 py-2 bg-gray-200 active:bg-gray-300  rounded-lg ";
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    return (
        <div className="bg-white flex items-center justify-between p-4 border-b border-gray-300">
            <div className="flex items-center">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className={buttonStyle}
                    disabled={item.quantity <= 1}
                >
                    -
                </button>
                <span className="px-3 py-2 rounded-lg border-2 border-gray-100">{item.quantity}</span>
                <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className={buttonStyle}
                >
                    +
                </button>
                <button
                    onClick={() => onRemove(item.id)}
                    className="ml-4 flex items-center justify-center text-white bg-red-500 hover:bg-red-700 p-2"
                >
                    <AiFillDelete size={18} />
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem