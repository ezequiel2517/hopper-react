import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import carritoIcon from './MarketCart.png'
import './MarketCart.scss'
import {NavLink} from "react-router-dom"

function MarketCart() {

    const { cartCantidad } = useContext(CartContext);
    return (
        <NavLink to={cartCantidad > 0 ? "/cart" : "/error/100"} className="contenedorCarrito">
            {
                <div className="numeroCompras" style={
                        { visibility: cartCantidad() > 0 ? "visible" : "hidden" }
                }>
                    <b>
                        {cartCantidad()}
                    </b>
                </div>

            }
            <div className='formatoCarrito'>
                <img className='img-fluid' src={carritoIcon}></img>
            </div>
        </NavLink>
    )
}

export default MarketCart;