import "./Testimonial.css"

function Testimonial(props){
    return(
        <>
        <section className="single-testi">
        <h6 className="stars">⭐⭐⭐⭐⭐</h6>
        <h6 className="testimonial-username">{props.username}</h6>
        <p className="tesimonial-comment">{props.comment}</p>
        </section>
        </>
    )
}
export default Testimonial;