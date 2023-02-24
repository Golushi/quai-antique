import React from 'react'
import name from "../Assets/Name/Name.png";

export default function Footer() {
  return (
    <footer id='contact' className='bg-myblue w-screen h-[200px]'>
      <div className="w-[50px] h-[50px] z-10 flex justify-center items-center">
          <img src={name} className="" alt="Name" />
      </div>
    </footer>
  )
}
