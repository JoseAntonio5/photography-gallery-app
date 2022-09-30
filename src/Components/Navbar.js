import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <h1 className="Navbar-logo">J</h1>
            <ul className='Navbar-items'>
                <li className='Navbar-item'><Link to="/">Home</Link></li>
                <li className='Navbar-item'><Link to="/about">About</Link></li>
                <li className='Navbar-item'><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;