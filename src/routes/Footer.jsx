import './Footer.css';

// Create your Footer component here
const Footer = () => {
    return (
        <div id="footer">
            <p>{"\u00A9"} Copyright {new Date().getFullYear()} by Mohamed Junaid Chaudhry</p>
        </div>
    )
}

export default Footer;