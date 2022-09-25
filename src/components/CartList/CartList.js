import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../../contexts/CartContext/CartContext';
import CartItem from '../CartItem/CartItem';
import './CartList.scss'
import { Navigate, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MensajeContext } from '../../contexts/MensajeContext/MensajeContext';

function CartList() {

    const { cart, cartTotal, cartCantidad } = useContext(CartContext);
    const {setMensaje} = useContext(MensajeContext);

    if (cartCantidad() === 0) {
        setMensaje("AÚN NO HAS COMPRADO NADA. ¡INTENTALO!");
        return <Navigate replace to="/alert/200" />
    }

    return (
        <>
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
                        <td colSpan={4}>
                            <div
                            className='d-flex justify-content-between'
                            >
                            ${cartTotal()}
                            <NavLink
                                to={"/checkout"}
                                className="bnt btn-primary ma"
                            >
                                <Button variant="success">TERMINAR COMPRA</Button>
                            </NavLink>
                            </div>

                        </td>
                    </tr>
                </tbody>
            </Table>
        </>

    );
}

export default CartList;