import { useNavigate } from 'react-router'
import CheckoutForm from '../components/CheckoutForm'
import { useCart } from '../context/CartContext'

const CheckoutPage = () => {
    const navigate = useNavigate()
    const { cart, total } = useCart()

    const handlePlaceOrder = (orderDetails) => {
        console.log('Order placed:', orderDetails)
        navigate('/order-confirmed')
    }

    return (
        <CheckoutForm
            cart={cart}
            total={total}
            onPlaceOrder={handlePlaceOrder}
        />
    )
}

export default CheckoutPage