import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import axios from 'axios';
import Modal from "../components/Modal";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
const Home = () => {
  const [bmi, setBmi] = useState(0);
  const [modalities, setModalities] = useState(null); 
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      if (bmi.length > 0) {
        setLoading(true);
        const response = await axios.post('https://bmi-api-7zyb.onrender.com/get-modalities', { bmi });
        setModalities(response.data);
        toggleModal(); 
        setBmi(''); 
      }
    } catch (error) {
      console.error('Error generating modalities:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <main className="bg-black min-h-screen flex flex-col justify-center items-center py-10 px-4 lg:px-8">
      <h1 className="text-white text-center text-2xl lg:text-4xl font-bold mb-8">
        Enter your BMI <span className="text-green-500 underline text-xs md:text-sm">
          <Link to={'/calculate'}>
          Don't Know your BMI?</Link>
        </span>
      </h1>
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <div className="flex flex-col space-y-4">
          <Input 
            type="number" 
            label="Enter your BMI"
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
            onChange={(e) => setBmi(e.target.value)}
            value={bmi} 
          />
          <Button
            size="lg" 
            color="black"
            className="bg-black text-white px-6 py-3 rounded-md cursor-pointer w-full"
            onClick={handleGenerate}
          >
            {loading ? <ClipLoader color="#FFF"/> : "Generate"}
          </Button>
          {modalities && (
            <Button onClick={toggleModal} color="black" className="bg-black text-white px-6 py-3 rounded-md cursor-pointer mt-4 w-full">
              View Results
            </Button>
          )}
        </div>
      
        {showModal && modalities && (
          <Modal diet={modalities.diet} physicalTherapy={modalities.physical_therapy} onClose={toggleModal}  bmiType={modalities.bmiType}/>
        )}
      </div>
    </main>
  );
};

export default Home;
