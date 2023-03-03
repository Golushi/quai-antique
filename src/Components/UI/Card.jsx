import React from "react";

export default function Card(props) {
  return (
    <div className="fixed w-64 h-80 grid grid-rows-3 overflow-hidden justify-items-center bg-mywhite rounded-xl border-2 shadow-xl">
      {props.children}
    </div>
  );
}
