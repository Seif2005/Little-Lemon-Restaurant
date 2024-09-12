import "./ErrorMessage.css"

function ErrorMessage(props){
    return(
        <>
        <p id="error-message">{props.message}</p>
        </>
    )
}
export default ErrorMessage;