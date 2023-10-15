const appointmentData = [
    {
      id: 1,
      title: 'Meeting 1',
      start: '2023-10-08T10:00:00',
      end: '2023-10-08T11:30:00',
    },
    {
      id: 2,
      title: 'Lunch with Friend',
      start: '2023-10-08T12:00:00',
      end: '2023-10-08T13:00:00',
    },
    {
      id: 3,
      title: 'Doctor Appointment',
      start: '2023-10-08T14:30:00',
      end: '2023-10-08T15:30:00',
    },
  ];
  
  const movieScheduleData = [
    {
      id: 1,
      movieTitle: 'The exorcist believer',
      showtime: '2023-10-08T13:00:00',
      img: 'src/img/the_exorcist_believer_pic.jpg'
    },
    {
      id: 2,
      movieTitle: 'Dovbush',
      showtime: '2023-10-08T15:00:00',
      img: 'src/img/dovbush_pic.jpg'
    },
    {
      id: 3,
      movieTitle: 'Paw patrol',
      showtime: '2023-10-08T16:30:00',
      img: 'src/img/paw_patrol.jpg'
    },
    {
      id: 4,
      movieTitle: 'The big picnic',
      showtime: '2023-10-08T19:00:00',
      img: 'src/img/the_big_picnic_pic.jpg'
    },
    
  ];
  
  const movieDurationInMilliseconds = 120 * 60 * 1000; // Assuming movies are 2 hours long (in milliseconds)
  
  export { appointmentData, movieScheduleData, movieDurationInMilliseconds };
  