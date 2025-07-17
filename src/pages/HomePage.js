import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeCenter from "../components/HomeCenter/HomeCenter";
import Specials from "../components/Specials/Specials";
import Testimonials from "../components/Testimonials/Testimonials";
import restaurantFoodImg from "../assets/restauranfood.jpg"

function HomePage(){
    return (
        <>
        <Header />
        <HomeCenter title = "Little Lemon" subtitle = "Chicago" imgSrc = {restaurantFoodImg} caption = "We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." isbutton = {true} navigate="/reserve"/>
        <Specials/>
        <Testimonials/>
        <About/>
        <Footer/>
        </>
    )
}
export default HomePage;