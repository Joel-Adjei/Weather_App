import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import products from "../data";

const HomePage = () => {
    const { addToCart } = useCart()

    return (
        <>
            <h1 className="text-3xl text-orange-500 font-bold mb-8">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
        </>
    )
}

export default HomePage