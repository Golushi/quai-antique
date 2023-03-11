import React, { useState } from "react";
import Modal from "./bookingModal";

export default function Reservation() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="fixed z-20 top-[130px] pl-4 flex flex-col items-start">
        <button
          type="button"
          onClick={() => setIsVisible(true)}
          className="rounded-lg font-cabin py-1 px-2 bg-myred transform duration-500 hover:scale-125 text-mywhite"
        >
          Réserver
        </button>
      </div>

      <Modal open={isVisible} onClose={() => setIsVisible(false)} />
    </>
  );
}
