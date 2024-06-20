import { Link, useLocation } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
    const location = useLocation();

    return ( 
        <nav className="nav__bottom__container">
            <div className="bottom__container">
                <ul className="nav">
                    <li className='nav-link'>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    </li> 
                    <li className='nav-link'>
                        <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Shop</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to="/category/men" className={location.pathname === '/category/men' ? 'active' : ''}>Men</Link>
                    </li> 
                    <li className='nav-link'>
                        <Link to="/category/women" className={location.pathname === '/category/women' ? 'active' : ''}>Women</Link>
                    </li> 
                    <li className='nav-link'>
                        <Link to="/category/kids" className={location.pathname === '/category/kids' ? 'active' : ''}>Kids</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavLinks;
