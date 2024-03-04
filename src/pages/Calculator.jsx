import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import HelpModal from "../components/HelpModal";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const handleCalculateBMI = () => {
    if (height > 0 && weight > 0) {
      const bmiValue = weight / ((height / 100) ** 2);
      setBmi(bmiValue.toFixed(2)); // Round BMI value to 2 decimal places
    } else {
      // Handle invalid input
      console.error("Invalid height or weight");
    }
  };

  const handleHelpClick = () => {
    // Open modal when the "Help" button is clicked
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Close modal when the "Close" button inside the modal is clicked
    setShowModal(false);
  };

  return (
    <main className="bg-black min-h-screen flex flex-col justify-center items-center py-10 px-4 lg:px-8">
      <h1 className="text-white text-center text-3xl lg:text-4xl font-bold mb-8 capitalize">
        BMI Calculator
      </h1>
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <div className="flex flex-col space-y-4">
          <Input 
            type="number" 
            label="Enter your height (cm)"
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
            onChange={(e) => setHeight(e.target.value)}
            value={height}
          />
          <Input 
            type="number" 
            label="Enter your weight (kg)"
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
          />
          <Button
            size="lg" 
            color="black"
            className="bg-black text-white px-6 py-3 rounded-md cursor-pointer w-full"
            onClick={handleCalculateBMI}
          >
            Calculate BMI
          </Button>
          {/* Help button to open modal */}
          <Button
            size="lg" 
            color="black"
            className="bg-black text-white px-6 py-3 rounded-md cursor-pointer w-full"
            onClick={handleHelpClick}
          >
            Help
          </Button>
          {/* Display BMI result */}
          {bmi > 0 && (
            <div className="text-white text-center">
              <p>Your BMI:
               <span className="text-blue-500 font-bold ">   {bmi}</span>
              </p>
            </div>
          )}
          <Link to={'/'} className="text-white">Back to home</Link>
        </div>
      </div>
      {/* Modal component */}
      {showModal && (
        <HelpModal onClose={handleCloseModal} />
      )}
    </main>
  );
};

export default Calculator;
