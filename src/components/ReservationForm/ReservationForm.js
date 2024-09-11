import "./ReservationForm.css"
import FormSuccessMessage from "../FormSuccessMessage/FormSuccessMessage";

function ReservationForm(){
    return(
        <>
        <section className="form-area">
            <section className="form-container">
            <h1>Reservation Details</h1>
            {true?<FormSuccessMessage/>:<></>}
            </section>
        </section>
        </>
    )
}
export default ReservationForm;