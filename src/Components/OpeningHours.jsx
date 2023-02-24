import React from 'react'

export default function OpeningHours() {
  return (
    <section id='horaires'>
      <div className='w-2/3 min-w-[260px] md:w-[700px] h-screen flex-container m-auto'>
        <div className=' grid my-10'>
          <h3 className='text-xl text-myblack justify-self-center'>Horaires</h3>
        </div>
        <div className='grid grid-cols-3'>
          <div className='grid justify-items-start my-2'>
            <p className='text-myyellow h-20 items-center flex my-2'>Lundi</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Mardi</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Mercredi</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Jeudi</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Vendredi</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Samedi</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Dimanche</p>
          </div>
          <div className='my-2'></div>
          <div className='grid justify-items-end text-sm my-2'>
            <p className='text-myyellow h-20 items-center flex my-2'>Midi 12:00-14:30<br/>Soir 19:00-23:00</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Midi 12:00-14:30<br/>Soir 19:00-23:00</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Midi 12:00-14:30<br/>Soir 19:00-23:00</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Midi 12:00-14:30<br/>Soir 19:00-23:00</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Midi 12:00-14:30<br/>Soir 19:00-00:00</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Midi 12:00-15:00<br/>Soir 19:00-00:00</p>
            <p className='text-myyellow h-20 items-center flex my-2'>Midi 12:00-15:00<br/>Soir 19:00-00:00</p>
          </div>
        </div>
      </div>
    </section>
  )
}