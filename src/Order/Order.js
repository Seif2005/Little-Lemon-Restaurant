import "./Order.css"
function Order(props){
    return(
        <>
        <div className="card" >
            <img className="card-img-top order-image" src={props.orderImageSrc} alt="Card image"/>
            <div className="card-body">
                <section className="order-flex">
                    <section className="order-column1">
                    <h4 className="card-title">{props.orderName}</h4>
                    </section>
                    <section className="order-column2">
                    <h6 className="order-price ">{props.orderPrice}</h6>
                    </section>
                </section>
                <p className="card-text order-description">{props.orderDescription}</p>
                <h3 className="delivery-button">Order a Delivery 🛵</h3>
            </div>
        </div>
        </>
    )
}
export default Order;