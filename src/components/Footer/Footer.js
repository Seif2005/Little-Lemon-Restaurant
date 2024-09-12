import "./Footer.css"
function Footer(){
    return(
        <>
        <section className="footer-section">
            <section className="footer-column">
                <img src="src\assets\logo.png"/>
            </section>
            <section className="footer-column">
                <h5 className="footer-title">App Navigation</h5>
                <h6 className="footer-data">Home</h6>
                <h6 className="footer-data">About</h6>
                <h6 className="footer-data">Menu</h6>
                <h6 className="footer-data">Reservation</h6>
                <h6 className="footer-data">Order Online</h6>
                <h6 className="footer-data">Login</h6>
            </section>
            <section className="footer-column contact-section">
            <h5 className="footer-title">Contact</h5>
            <h6 className="footer-data">Address</h6>
            <h6 className="footer-data">Phone Number</h6>
            <h6 className="footer-data">Email</h6>

            </section>
            <section className="footer-column contact-section">
            <h5 className="footer-title">Social Media</h5>
            <h6 className="footer-data">Facebook</h6>
            <h6 className="footer-data">Instagram</h6>
            <h6 className="footer-data">Twitter</h6>
            </section>
        </section>
        </>
    );
}
export default Footer;