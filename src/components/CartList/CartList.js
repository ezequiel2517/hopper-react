import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../../contexts/CartContext/CartContext';
import CartItem from '../CartItem/CartItem';
import './CartList.scss'
import { Navigate } from 'react-router-dom';



function CartList() {

    const {cart, cartTotal, cartCantidad} = useContext(CartContext);

    if(cartCantidad()===0){
        return <Navigate replace to="/error/100" />
    }

    return (
        <Table bordered
            className='my-5 container tablaCompras w-50'>
            <thead>
                <tr>
                    <th></th>
                    <th>Cantidad</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cart.map((prod) => <CartItem key={prod.id} item={prod} />)}
                <tr>
                    <td>Total</td>
                    <td colSpan={4}>${cartTotal()}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default CartList;