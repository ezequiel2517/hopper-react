import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import carritoIcon from './MarketCart.png'
import './MarketCart.scss'
import {NavLink} from "react-router-dom"

function MarketCart() {

    const { cartCantidad } = useContext(CartContext);

    return (
        <NavLink to={`/cart`} className="contenedorCarrito">
            {
                <div className="numeroCompras" style={
                    cartCantidad() > 0
                        ?
                        { visibility: "visible" }
                        :
                        { visibility: "none" }
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