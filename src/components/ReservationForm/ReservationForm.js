import React, { useState } from 'react';
import Button from '../Button/Button';
import "./ReservationForm.css"
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function ReservationForm(props) {
    let touchedDate = false;
    let touchedGuests = false;
    let touchedTime = false;
    let touchedOccassion = false;
    let [errorDateState,setErrorDate] = useState(false);
    let [errorTimeState,setErrorTime] = useState(false);
    let [errorGuestsState,setErrorGuests] = useState(false);
    let [errorOccasionState,setErrorOccasion] = useState(false);
    const navigate = useNavigate();
    function handleReserveClick(e){
        e.preventDefault();
        if(date==""||guests>10||guests<1||time==""||occasion==""){
            if(date==""){
                setErrorDate(true);
            }else{
                setErrorDate(false);
            }
            if(guests>10||guests<1){
                setErrorGuests(true);
            }else{
                setErrorGuests(false);
            }
            if(time==""){
                setErrorTime(true);
            }else{
                setErrorTime(false);
            }
            if(occasion==""){
                setErrorOccasion(true);
            }else{
                setErrorOccasion(false);
            }
        }else{
            navigate("/confirm");
        }
    }
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [guests,setGuests] = useState(0);
    const [occasion,setOccasion] = useState("")
    function onDateChosen(e){
        setDate(e.target.value);
        props.initializeAvailableTimes();
        setErrorDate(false);
    }
    function handleGuests(e){
        let val = e.target.value;
        if(val>10||val<1){
            setErrorGuests(true);
        }
        else{
            setGuests(val);
            setErrorGuests(false);
        }
    }


    return (
        <section className='form-area'>
        <form style={{ display: 'grid', maxWidth: '250px', gap: '20px' }}>
            <label htmlFor="res-date" className='form-label'>Choose date</label>
            <input type="date" id="res-date" value={date} onChange={onDateChosen}/>
            {errorDateState?<ErrorMessage message = "Please Choose Date!"/>:<></>}
            <label htmlFor="res-time" className='form-label'>Choose time</label>
            <select id="res-time" value={time} onChange={(e)=>{setTime(e.target.value);setErrorTime(false);}}>
            {props.availableTimes.map((droptime, index) => (
        <option key={index} value={droptime}>
          {droptime}
        </option>
      ))}
            </select>
            {errorTimeState?<ErrorMessage message = "Please Choose Date and Time"/>:<></>}
            <label htmlFor="guests" className='form-label'>Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuests}/>
            {errorGuestsState?<ErrorMessage message = "Please Choose number of guests between 1 and 10!"/>:<></>}
            <label htmlFor="occasion" className='form-label'>Occasion</label>
            <select id="occasion" value={occasion} onChange={(e)=>{setOccasion(e.target.value);setErrorOccasion(false)}}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {errorOccasionState?<ErrorMessage message = "Please Choose Occasion!"/>:<></>}
            <Button text="Reserve" onClick = {handleReserveClick}/>
        </form>
        </section>
    );
}

export default ReservationForm;
