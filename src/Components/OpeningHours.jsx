import React from 'react'

export default function OpeningHours() {
  return (
    <section id='horaires'>
      <div className='w-2/3 min-w-[260px] md:w-[700px] h-screen flex-container m-auto'>
        <div className='border-2 border-yellow grid justify-items-stretch my-20'>
          <h3 className='text-xl border-2 border-black text-myblack justify-self-center'>Horaires</h3>
        </div>
        <div className='flex-container'>
          <div className='border-4 border-myred grid justify-items-start my-5'>
            <p className='text-myyellow border border-black h-20'>Lundi</p>
            <p className='text-myyellow border border-black h-20'>Mardi</p>
            <p className='text-myyellow border border-black h-20'>Mercredi</p>
            <p className='text-myyellow border border-black h-20'>Jeudi</p>
            <p className='text-myyellow border border-black h-20'>Vendredi</p>
            <p className='text-myyellow border border-black h-20'>Samedi</p>
            <p className='text-myyellow border border-black h-20'>Dimanche</p>
          </div>
          <div className='border-4 border-myred grid justify-items-end my-5'>
            <p className='text-myyellow border border-black h-20'>Lundi</p>
            <p className='text-myyellow border border-black h-20'>Mardi</p>
            <p className='text-myyellow border border-black h-20'>Mercredi</p>
            <p className='text-myyellow border border-black h-20'>Jeudi</p>
            <p className='text-myyellow border border-black h-20'>Vendredi</p>
            <p className='text-myyellow border border-black h-20'>Samedi</p>
            <p className='text-myyellow border border-black h-20'>Dimanche</p>
          </div>
        </div>
      </div>
    </section>
  )
}
