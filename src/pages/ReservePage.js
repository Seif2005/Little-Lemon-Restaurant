import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeCenter from "../components/HomeCenter/HomeCenter";
import ReservationForm from "../components/ReservationForm/ReservationForm";


function ReservePage(){

    const [availableTimes,setAvailableTimes] = useState([]);
    function initializeAvailableTimes(){
        setAvailableTimes(["17:00","18:00","19:00","20:00","21:00","22:00"])
    }
    return (
        <>
        <Header/>
        <HomeCenter title = "Reserve Your Table" subtitle = "Little Lemon Restaurant" imgSrc = "src\assets\restaurant.jpg" isbutton = {false} navigate="/none" caption = "Candlelit tables, the aroma of sizzling kebabs, and laughter echoing through the cozy corners—reserve your spot at Little Lemon and let your taste buds embark on a Mediterranean adventure!"/>
        <ReservationForm availableTimes = {availableTimes} initializeAvailableTimes = {initializeAvailableTimes}/>
        <Footer/>
        </>
    )
}
export default ReservePage;