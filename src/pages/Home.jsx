import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import Loader from "../components/Loader";
import axios from 'axios';
import Modal from "../components/Modal";

const Home = () => {
  const [bmi, setBmi] = useState(0);
  const [modalities, setModalities] = useState({ diet: [], physical_therapy: [], bmiType:""});
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      if (bmi.length > 0) {
        setLoading(true);
        const response = await axios.post('http://localhost:5000/get-modalities', { bmi });
        setModalities(response.data);
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
      <h1 className="text-white text-center text-3xl lg:text-4xl font-bold mb-8 capitalize">
        Input your BMI to generate physical therapy modalities to increase overall health
      </h1>
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <div className="flex flex-col space-y-4">
          <Input 
            type="number" 
            placeholder="Enter your BMI"
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
            onChange={(e) => setBmi(e.target.value)}
          />
          <Button
            size="lg" 
            color="black"
            className="bg-black text-white px-6 py-3 rounded-md cursor-pointer w-full"
            onClick={handleGenerate}
          >
            Generate
          </Button>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
    
          <Button onClick={toggleModal} size="lg" color="black" className="bg-black text-white px-6 py-3 rounded-md cursor-pointer mt-4 w-full">
            View Modal
            </Button>
          {showModal && (
            <Modal diet={modalities.diet} physicalTherapy={modalities.physical_therapy} onClose={toggleModal}  bmiType={modalities.bmiType}/>
          )}
        </>
      )}
    </main>
  );
};

export default Home;
