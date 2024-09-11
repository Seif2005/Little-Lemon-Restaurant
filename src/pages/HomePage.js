import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeCenter from "../components/HomeCenter/HomeCenter";
import Specials from "../components/Specials/Specials";
import Testimonials from "../components/Testimonials/Testimonials";

function HomePage(){
    return (
        <>
        <Header />
        <HomeCenter title = "Little Lemon" subtitle = "Chicago" imgSrc = "src\assets\restauranfood.jpg" caption = "We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." isbutton = {true}/>
        <Specials/>
        <Testimonials/>
        <About/>
        <Footer/>
        </>
    )
}
export default HomePage;