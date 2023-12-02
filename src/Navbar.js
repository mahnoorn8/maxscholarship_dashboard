import { NavLink } from 'react-router-dom'
import Home from './Home';
// import { ReactComponent as Brand } from './assets/img.svg'
import logo from './assets/img.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <NavLink to="/" component={Home}>
                        <img src={logo} className="brand-logo"/>
                    </NavLink>
                </div>
                <div className="nav-elements">
                    <ul>
                        <li>
                            <NavLink to="/scholarships">Scholarships</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sponsor">Sponsor</NavLink>
                        </li>
                        <li>
                            <NavLink to="/past-winners">Past Winners</NavLink>
                        </li>
                        <li>
                            <NavLink to="/financials">Financials</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq">FAQs</NavLink>
                        </li>
                        <li className="nav-login">
                            {/*Full Screen*/}
                            {/*Dark Mode*/}
                            <NavLink to="/login">Login</NavLink> {/*Redirect to login portal*/}
                            <NavLink className="apply-button" to="/apply">
                                <button>
                                    Apply
                                </button>
                            </NavLink> {/*Redirect to login portal*/}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
