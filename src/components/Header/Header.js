import './Header.scss'
import MarketCart from '../MarketCar/MarketCart.js'
import { NavLink } from "react-router-dom"

function Header() {

    return (
        <header>
            <MarketCart></MarketCart>
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
                <NavLink to={`/category/52411`}
                    className={({ isActive }) =>
                        isActive ? "tumbaActive" : "tumbaNone"
                    }
                >
                    <div className='tumbaNews' >
                        NEWS
                    </div>
                </NavLink>
                <NavLink to={`/category/49473`}
                    className={({ isActive }) =>
                        isActive ? "tumbaActive" : "tumbaNone"
                    }
                >
                    <div className='tumbaSpanish' >
                        SPANISH
                    </div>
                </NavLink>
            </div>
        </header>
    )
}

export default Header