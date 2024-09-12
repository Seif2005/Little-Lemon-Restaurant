import React, { useState } from 'react';
import Button from '../Button/Button';
import "./ReservationForm.css"
import FormSuccessMessage from '../FormSuccessMessage/FormSuccessMessage';

function ReservationForm(props) {
    const [success,setSuccess] = useState(false);
    function handleReserveClick(e){
        setSuccess(true);
        e.preventDefault();
        console.log(`date:${date}, time:${time}, guests:${guests}, occasion:${occasion}`)
    }
    const [date,setDate] = useState();
    const [time,setTime] = useState("17:00");
    const [guests,setGuests] = useState(1);
    const [occasion,setOccasion] = useState("Birthday")
    function onDateChosen(e){
        setDate(e.target.value);
        props.initializeAvailableTimes();
    }
    

    return (
        <section className='form-area'>
        <form style={{ display: 'grid', maxWidth: '250px', gap: '20px' }}>
            <label htmlFor="res-date" className='form-label'>Choose date</label>
            <input type="date" id="res-date" value={date} onChange={onDateChosen}/>
            <label htmlFor="res-time" className='form-label'>Choose time</label>
            <select id="res-time" value={time} onChange={(e)=>setTime(e.target.value)}>
            {props.availableTimes.map((droptime, index) => (
        <option key={index} value={droptime}>
          {droptime}
        </option>
      ))}
            </select>
            <label htmlFor="guests" className='form-label'>Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>setGuests(e.target.value)}/>
            <label htmlFor="occasion" className='form-label'>Occasion</label>
            <select id="occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <Button text="Reserve" onClick = {handleReserveClick}/>
        </form>
        {success?<FormSuccessMessage/>:<></>}
        </section>
    );
}

export default ReservationForm;
