
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import NoPageFound from "./components/NoPageFound";
import Login from "./components/Login";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;