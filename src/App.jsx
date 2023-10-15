import { useState } from 'react';
import Calendar from './components/Calendar';
import Suggestion from './components/Suggestion';
import { appointmentData, movieScheduleData, movieDurationInMilliseconds } from './data/data'; // Import your sample data
import './styles/app.css'
import Header from './components/Header';
import MovieList from './components/MovieList';


function App() {
  const [isAppointment, setIsAppointment] = useState(false)
  const [isSuggestion, setIsSuggestion] = useState(false)

  const handleAppointment = (e) => {
    e.preventDefault()
    setIsAppointment((prev) => !prev)
  }

  const handleSuggestion = (e) => {
    e.preventDefault()
    setIsSuggestion((prev) => !prev)
  }

  return (
    <div className='app'>
      <Header 
      handleSuggestion={handleSuggestion} 
      isSuggestion={isSuggestion}
      handleAppointment={handleAppointment}
      isAppointment={isAppointment} />   
      {isAppointment && <Calendar appointmentData={appointmentData} />}
    
      
      {isSuggestion && <Suggestion
        appointmentData={appointmentData}
        movieScheduleData={movieScheduleData}
        movieDurationInMilliseconds={movieDurationInMilliseconds}
      />}
      
      <MovieList movieScheduleData={movieScheduleData} />

    </div>
  )
}

export default App
