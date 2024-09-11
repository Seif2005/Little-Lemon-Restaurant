import Button from "../Button/Button";
import Order from "../Order/Order";
import "./Specials.css"


function Specials(){
 return (
    <>
    <section className="greater-section">
        <section className="container">
        <section className="text-button">
            <h1 className="column specials">Specials</h1>
            <Button text = "Order Online" action="/order" className="column button"/>
        </section>
        <section className="orders">
            <section className="order">
            <Order orderName="Greek Salad" orderPrice="$12.99" orderImageSrc = "src\assets\greek salad.jpg" orderDescription="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "/>
            </section>
            <section className="order" id="middle-order">
            <Order orderName="Bruschetta" orderPrice="$5.99" orderImageSrc = "src\assets\bruschetta.jpg" orderDescription="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "/>
            </section>
            <section className="order">
                <Order orderName="Lemon Dessert" orderPrice="$5.00" orderImageSrc = "src\assets\lemon dessert.jpg" orderDescription="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
            </section>
        </section>
        </section>
    </section>
    </>
 )
}
export default Specials;