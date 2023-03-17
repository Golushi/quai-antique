import React from "react";
import Card from "./Card";

export default function ErrorModal(props) {
  return (
    <Card>
      <header className="bg-myred px-6 py-6 text-2xl font-bold w-full text-mywhite flex justify-center p-2">
        <h2>{props.title}</h2>
      </header>
      <div className="px-6 m-auto overflow-x-hidden py-6 text-lg text-myblack">
        <p>{props.message}</p>
      </div>
      <footer className="px-6 py-6">
        <button
          onClick={props.onConfirm}
          className="text-white bg-myyellow active:bg-yellow-700 font-bold transform duration-500 uppercase text-sm px-6 py-3 rounded shadow hover:scale-150 outline-none focus:outline-none mr-1 mb-1"
        >
          OK
        </button>
      </footer>
    </Card>
  );
}
