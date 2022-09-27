import './Header.css';

function Header() {
    return(
        <div className="Header">
            <div className="Header-image">
                <img src={require('../imgs/me.jpg')} alt="Jose Antonio"/>
            </div>
            <div className="Header-text">
                <h1 className="Header-title">José Antônio</h1>
                <p>A web developer / Amateur photographer</p>
            </div>
        </div>
    );
}

export default Header;