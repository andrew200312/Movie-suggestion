import React from 'react'
import { format } from 'date-fns';
import '../styles/card.css'


export default function Card(props) {

const dateTime = new Date(props.showtime);
const formattedDate = format(dateTime, 'dd.MM.yyyy');
const formattedTime = format(dateTime, 'HH:mm');

    return (    
        <>
            <div className='card'>
                <img src={props.img} alt="img" height='200px' width='112px'/>
                <div className='card-text'>
                    <h2>{props.movieTitle}</h2>
                    <p>День: {formattedDate}</p>
                    <p>Час: {formattedTime}</p>
                </div>
            </div>
        </>
    )
}
