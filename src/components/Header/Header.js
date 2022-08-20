import './Header.scss'
import Menu from '../Menu/Menu'
import Carrito from '../Carrito/Carrito'

function Header() {
    return (
        <header>
            <Menu></Menu>
            <Carrito></Carrito>
        </header>
    )
}

export default Header