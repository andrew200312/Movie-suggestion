import React from 'react'
import logo from '../img/logo.png'
import '../styles/header.css'
import Button from '@material-ui/core/Button';

export default function Header({handleSuggestion, isSuggestion, handleAppointment, isAppointment}) {
  return (
    <header className='header'>
        <img src={logo} alt="Logo" height='60px'/>

        <Button 
          onClick={(e) => handleSuggestion(e)}
          variant="contained" 
          color="secondary">
          {isSuggestion ? "Hide" : "Show Suggestion"}
        </Button>

        <Button 
          onClick={(e) => handleAppointment(e)}
          variant="contained" 
          color="primary">
          {isAppointment ? "Hide" : "Show Appointment data"}
        </Button>
    </header>   
  )
}
