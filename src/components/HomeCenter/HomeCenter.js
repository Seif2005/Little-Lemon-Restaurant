import "./HomeCenter.css"
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function HomeCenter(props){
    const navigate  = useNavigate()
    function handleClick(){
        navigate(props.navigate);
    }
    return(
        <div className="main-part">
            <section className="column">
                <article className="text-area">
                <h1 className="restaurant-title">{props.title}</h1>
                <h3 className="chicago">{props.subtitle}</h3>
                <h5 className="lower-text">{props.caption}</h5>
                {props.isbutton? <Button text = "Reserve a Table" onClick={handleClick}/>:<></>}
                </article>
            </section>
            <article className="column">
                <img src={props.imgSrc} alt = "Main Image" className="main"/>
            </article>

        </div>
    )
}
export default HomeCenter;