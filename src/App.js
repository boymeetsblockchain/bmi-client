import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" index element={<Home/>}/>
      <Route path="/calculate" index element={<Calculator/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
