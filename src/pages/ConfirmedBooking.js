import Footer from "../components/Footer/Footer";
import FormSuccessMessage from "../components/FormSuccessMessage/FormSuccessMessage";
import Header from "../components/Header/Header";

function ConfirmedBooking(){
    return (
        <>
        <Header/>
        <section className="confirmed-section">
        <FormSuccessMessage/>
        </section>
        <Footer/>
        </>
    );
}
export default ConfirmedBooking;