import "./HomeCenter.css"
import Button from "../Button/Button";

function HomeCenter(props){
    return(
        <div className="main-part">
            <section className="column">
                <article className="text-area">
                <h1 className="restaurant-title">{props.title}</h1>
                <h3 className="chicago">{props.subtitle}</h3>
                <h5 className="lower-text">{props.caption}</h5>
                {props.isbutton? <Button text = "Reserve a Table" action="/reserve"/>:<></>}
                </article>
            </section>
            <article className="column">
                <img src={props.imgSrc} alt = "Main Image" className="main"/>
            </article>

        </div>
    )
}
export default HomeCenter;