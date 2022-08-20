import carritoIcon from './carrito.png'
import './Carrito.scss'

function Carrito() {
    return (
        <div className="contenedorCarrito">
            <div className="numeroCompras">
                <b>
                    5
                </b>
            </div>
            <div className='formatoCarrito'>
                <img className='img-fluid' src={carritoIcon}></img>
            </div>
        </div>
    )
}

export default Carrito;