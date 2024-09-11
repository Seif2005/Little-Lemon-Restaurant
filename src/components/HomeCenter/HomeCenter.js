import "./HomeCenter.css"
import Button from "../Button/Button";

function HomeCenter(){
    return(
        <div className="main-part">
            <section className="column">
                <article className="text-area">
                <h1 className="restaurant-title">Little Lemon</h1>
                <h3 className="chicago">Chicago</h3>
                <h5 className="lower-text">We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h5>
                <Button text = "Reserve a Table" action="/test"/>
                </article>
            </section>
            <article className="column">
                <img src="../../assets/restauranfood.jpg" alt = "Main Image" className="main"/>
            </article>

        </div>
    )
}
export default HomeCenter;