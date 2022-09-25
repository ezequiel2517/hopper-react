import { Button } from "react-bootstrap";
import "./Checkout.scss"
import { useState, useContext } from "react";
import { CartContext } from '../../contexts/CartContext/CartContext';
import { addDoc, collection } from 'firebase/firestore/lite'
import { db } from "../../helpers/firebase/config"
import { Navigate } from "react-router-dom";
import { MensajeContext } from '../../contexts/MensajeContext/MensajeContext';

function Checkout() {

    const { cart, cartTotal, emptyCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const {setMensaje} = useContext(MensajeContext);

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }
        const ordenesRef = collection(db, 'ordenes');
        addDoc(ordenesRef, orden)
            .then((doc) => {
                setOrderId(doc.id);
            })
    }

    if (orderId) {
        setMensaje(`COMPRA COMPLETADA. ID: ${orderId}`);
        emptyCart();
        return (
            <Navigate replace to="/alert/100" />
        )
    }

    return (
        <div className="formulario">
            <h2
                className="mb-4"
            >COMPLETA TU COMPRA
            </h2>
            <form
                className="w-75"
                onSubmit={handleSubmit}
            >
                <input
                    className="form-control mb-2"
                    name="nombre"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    onChange={handleInputChange}
                ></input>
                <input
                    className="form-control mb-2"
                    name="email"
                    type="email"
                    placeholder="Ingresa tu email"
                    onChange={handleInputChange}
                ></input>
                <input
                    className="form-control mb-2"
                    name="direccion"
                    type="text"
                    placeholder="Ingresa tu direccion"
                    onChange={handleInputChange}
                ></input>
                <Button
                    type="submit"
                    className="btn btn-primary mt-4"
                    variant="danger"
                >
                    ENVIAR
                </Button>
            </form>
        </div>
    )
}

export default Checkout;