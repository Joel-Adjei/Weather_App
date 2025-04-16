import {createContext, useContext, useEffect, useState} from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [itemCount, setItemCount] =useState(0)

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id)

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...prevCart, { ...product, quantity: 1 }]
        })
    }

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return

        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        )
    }

    const removeItem = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    useEffect(()=>{
        setItemCount(cart.reduce((count, item) => count + item.quantity, 0))
    }, [cart])
    function resetItemCount() {
        setItemCount( 0)
        setCart([])
    }
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                updateQuantity,
                removeItem,
                total,
                itemCount,
                resetItemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)