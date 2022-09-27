import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <h1 className="Navbar-logo">J</h1>
            <ul className='Navbar-items'>
                <li className='Navbar-item'><a href='#'>Home</a></li>
                <li className='Navbar-item'><a href='#'>About</a></li>
                <li className='Navbar-item'><a href='#'>Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;