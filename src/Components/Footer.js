import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import './Footer.css';

function Footer() {
    return(
        <div className="Footer">
            <div className="Footer-container">
                <div className="Footer-icons">
                    <a href="https://github.com/JoseAntonio5" rel="noreferrer" target="_blank">
                        <FaGithubSquare />
                    </a>
                    <a href="https://www.instagram.com/jajunior5/" rel="noreferrer" target="_blank">
                        <FaInstagramSquare />
                    </a>
                    <a href="http://www.linkedin.com/in/jose-antonio-lopes-paiva-junior" rel="noreferrer" target="_blank">
                        <FaLinkedin />
                    </a>
                </div>
                <div className="Footer-text">
                    <p>José Antônio &copy; 2022</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;