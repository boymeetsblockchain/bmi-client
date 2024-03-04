import React from "react";
import Button from "./Button";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black text-white border  p-8 rounded-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">How to Measure Height and Weight at Home</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Measuring Height:</h3>
          <p>- Stand with your back against a wall, with your feet flat on the floor.</p>
          <p>- Ensure your heels, back, and head are against the wall.</p>
          <p>- Use a straight object (such as a ruler or book) to mark the highest point on your head.</p>
          <p>- Measure the distance from the floor to the mark on the wall.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Measuring Weight:</h3>
          <p>- Use a digital or analog scale placed on a flat, hard surface.</p>
          <p>- Step onto the scale and stand still until the measurement is displayed.</p>
          <p>- Record the weight displayed on the scale.</p>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose}  className="bg-red-500 text-white px-6 py-3 rounded-md cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
