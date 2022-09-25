import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(item) {
        setCart([...cart, item]);
    }

    function deleteItem(id) {
        return setCart(cart.filter((item) => item.id!==id));
    }

    function cartCantidad() {
        return cart.reduce((cantidad, iter) => cantidad = cantidad + iter.cantidad, 0);
    }

    function itemInCart(id) {
        return cart.some( (iter) => iter.id===id)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    function emptyCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            cartCantidad,
            itemInCart,
            cartTotal,
            deleteItem,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}