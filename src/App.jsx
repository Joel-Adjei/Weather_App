import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'
import React from "react";

const App = () => {
    return (
        <CartProvider>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <main className="container mx-auto px-4 py-8">
                    <Outlet />
                </main>
            </div>
        </CartProvider>
    )
}

export default App