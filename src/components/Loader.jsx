import { FadeLoader } from 'react-spinners';
import React from 'react';

function Loader() {
  return (
    
    <div className="h-screen w-full flex items-center justify-center mx-auto">
      
      <FadeLoader color="fff" />
    </div>
  );
}

export default Loader;