import React from 'react'
import { BiCartAdd} from "react-icons/bi";

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                <button
                    onClick={() => onAddToCart(product)}
                    className="w-full flex items-center justify-center gap-2 bg-blue-500 cursor-pointer text-white py-2 rounded hover:bg-blue-600 active:bg-blue-400 transition"
                >
                    <BiCartAdd size={35} color={"white"} />
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard