import './Header.scss'
import Menu from '../Menu/Menu'
import MarketCar from '../MarketCar/MarketCar.js'
import tumba from "./tumba.png"
import { NavLink } from "react-router-dom"

function Header() {

    return (
        <header>
            <div className='menu'>
                <NavLink to={`/`}
                    className={({ isActive }) =>
                        isActive ? "tumbaActive" : "tumbaNone"
                    }
                >
                    <div className='tumbaHome' >
                        HOME
                    </div>
                </NavLink>
                <div className='tumbaOffers' >
                    OFFERS
                </div>
            </div>
        </header>
    )
}

export default Header