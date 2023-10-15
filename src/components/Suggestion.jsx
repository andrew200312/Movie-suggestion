import React, { useState } from 'react';
import Card from './Card';
import '../styles/card.css'

function Suggestion ({ appointmentData, movieScheduleData, movieDurationInMilliseconds }) {

  const [currentCard, setCurrentCard] = useState(null)
  const [cart, setCart] = useState([])

  const filteredShowtimes = movieScheduleData.filter((showtime) => {
    const showtimeStartTime = new Date(showtime.showtime);
    const showtimeEndTime = new Date(showtimeStartTime.getTime() + movieDurationInMilliseconds);

    return !appointmentData.some((appointment) => {
      const appointmentStartTime = new Date(appointment.start);
      const appointmentEndTime = new Date(appointment.end);

      return (
        (showtimeStartTime >= appointmentStartTime && showtimeStartTime < appointmentEndTime) ||
        (showtimeEndTime > appointmentStartTime && showtimeEndTime <= appointmentEndTime)
      );
    });
  });


  filteredShowtimes.sort((a, b) => {
    const currentTime = new Date();
    const timeToA = Math.abs(currentTime - new Date(a.showtime));
    const timeToB = Math.abs(currentTime - new Date(b.showtime));

    return timeToA - timeToB;
  });


  function dragStartHandler(e, card){
    console.log('start', card)
    setCurrentCard(card)
  }

  function dragEndHandler(e){

  }

  function dragOverHandler(e){
    e.preventDefault()

  }

  function dropHandler(e){
    e.preventDefault()
    setCart((prev) => [...prev, currentCard])
    alert(`You have successfully added the movie ticket "${currentCard.movieTitle}" to the cart`)
  }


  return (
    <div>
      <h2>Suggested Movie Time</h2><br />
      <p>Drag the movie to the shopping cart area to purchase a ticket</p>
      <br />
      <div className='suggested'>
        {filteredShowtimes.map((value, index) => (
            <div className='draggble'
              onDragStart={(e) => dragStartHandler(e, value)}
              onDragLeave={(e) => dragEndHandler(e)}
              draggable={true}
            >
              <Card 
                key={value.id} 
                img={value.img} 
                movieTitle={value.movieTitle} 
                showtime={value.showtime} 
              />
            </div>
        ))}
        <div 
          draggable={true} 
          className='cart'
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e)}
        >


        </div>
      </div>
    </div>
  );
};

export default Suggestion;
