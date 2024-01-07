import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    // we are declaring wrapper as width 100vh and height 100vh
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>

    </div>
  );
}

export default App;
