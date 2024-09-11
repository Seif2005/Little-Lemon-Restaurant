import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeCenter from "../components/HomeCenter/HomeCenter";
import ReservationForm from "../components/ReservationForm/ReservationForm";


function ReservePage(){
    return (
        <>
        <Header/>
        <HomeCenter title = "Reserve Your Table" subtitle = "Little Lemon Restaurant" imgSrc = "src\assets\restaurant.jpg" isbutton = {false} caption = "Candlelit tables, the aroma of sizzling kebabs, and laughter echoing through the cozy corners—reserve your spot at Little Lemon and let your taste buds embark on a Mediterranean adventure!"/>
        <ReservationForm/>
        <Footer/>
        </>
    )
}
export default ReservePage;