import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeCenter from "../components/HomeCenter/HomeCenter";
import ReservationForm from "../components/ReservationForm/ReservationForm";
import restaurantImg from "../assets/restaurant.jpg"


function ReservePage(){

    const [availableTimes,setAvailableTimes] = useState([]);
    function initializeAvailableTimes(){
        setAvailableTimes(["17:30","19:00","20:30","21:30","22:00"])
    }
    return (
        <>
        <Header/>
        <HomeCenter title = "Reserve Your Table" subtitle = "Little Lemon Restaurant" imgSrc = {restaurantImg} isbutton = {false} navigate="/none" caption = "Candlelit tables, the aroma of sizzling kebabs, and laughter echoing through the cozy corners—reserve your spot at Little Lemon and let your taste buds embark on a Mediterranean adventure!"/>
        <ReservationForm availableTimes = {availableTimes} initializeAvailableTimes = {initializeAvailableTimes}/>
        <Footer/>
        </>
    )
}
export default ReservePage;