import React from 'react';
import Button from '../Button/Button';
import "./ReservationForm.css"
import FormSuccessMessage from '../FormSuccessMessage/FormSuccessMessage';
function ReservationForm() {


    return (
        <section className='form-area'>
        <form style={{ display: 'grid', maxWidth: '250px', gap: '20px' }}>
            <label htmlFor="res-date" className='form-label'>Choose date</label>
            <input type="date" id="res-date" />
            <label htmlFor="res-time" className='form-label'>Choose time</label>
            <select id="res-time">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests" className='form-label'>Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion" className='form-label'>Occasion</label>
            <select id="occasion">
                <option>Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {/*Assign onclick */}
            <Button text="Reserve" />
        </form>
        {true?<FormSuccessMessage/>:<></>}
        </section>
    );
}

export default ReservationForm;
