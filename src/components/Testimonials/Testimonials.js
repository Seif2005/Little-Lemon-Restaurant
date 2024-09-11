import "./Testimonials.css"
import Testimonial from "../Testimonial/Testimonial";

function Testimonials(){
    return(
        <>
            <section className="testimonials-section">
                <h1 className="testi-title">Testimonials</h1>
                <section className="aligned-testi">
                <Testimonial username = "Mark Sam" comment = "Delicious Food!"/>
                <Testimonial username = "Anderson Jack" comment = "Amazing Spices!"/>
                <Testimonial username = "John Wick" comment = "Loved the Place!"/>
                <Testimonial username = "Sam Kevin" comment = "Best of the best!"/>
                </section>
            </section>
        </>
    )
}
export default Testimonials;