import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Button.css"

function Button(props){
    const navigate  = useNavigate()
    function handleClick(){
        navigate(props.action);
    }
    return(
        <>
        <button className="button" onClick={handleClick}>{props.text}</button>
        </>
    )
}
export default Button;