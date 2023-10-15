import React from 'react';

function Calendar ({ appointmentData }) {
  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointmentData.map((appointment) => (
          <li key={appointment.id}>
            {appointment.title} - {appointment.start} to {appointment.end}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
