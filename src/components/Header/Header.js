import './Header.scss'
import MarketCar from '../MarketCar/MarketCar.js'
import { NavLink } from "react-router-dom"

function Header() {

    return (
        <header>
            <MarketCar></MarketCar>
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
                <NavLink to={`/category/44425`}
                    className={({ isActive }) =>
                        isActive ? "tumbaActive" : "tumbaNone"
                    }
                >
                    <div className='tumbaOffers' >
                        OFFERS
                    </div>
                </NavLink>
            </div>
        </header>
    )
}

export default Header