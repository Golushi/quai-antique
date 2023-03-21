// import React, { useState } from 'react';

// function ReservationTimePicker() {
//   const [selectedTime, setSelectedTime] = useState('');

//   const handleTimeChange = (event) => {
//     setSelectedTime(event.target.value);
//   };

//   const timeOptions = [];
//   const startTimes = ['12:00', '19:00'];
//   const endTimes = ['13:30', '22:00'];

//   for (let i = 0; i < startTimes.length; i++) {
//     let startTime = new Date(`01/01/2000 ${startTimes[i]}`);
//     let endTime = new Date(`01/01/2000 ${endTimes[i]}`);

//     while (startTime <= endTime) {
//       timeOptions.push(
//         <option key={startTime} value={startTime.toLocaleTimeString('fr-FR', {timeStyle: 'short'})}>
//           {startTime.toLocaleTimeString('fr-FR', {timeStyle: 'short'})}
//         </option>
//       );
//       startTime.setMinutes(startTime.getMinutes() + 15);
//     }
//   }
//   return (
//     <div>
//       <label htmlFor="reservation-time"></label>
//       <select id="reservation-time" className='rounded-lg' value={selectedTime} onChange={handleTimeChange}>
//         <option value=""> Choisir une heure </option>
//         {timeOptions}
//       </select>
//     </div>
//   );
// }

// export default ReservationTimePicker;
