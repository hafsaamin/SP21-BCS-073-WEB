import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './MyComponents/Homepage';
import About from './MyComponents/About';
import Layout from './MyComponents/Layout';
import Contact from './MyComponents/Contact';
import Advertise from './MyComponents/Advertise';
import Sell from './MyComponents/Sell';
import Get from './MyComponents/Get';
import Signup from './MyComponents/Signup';
// import Signup from './MyComponents/Signup';
import Login from './MyComponents/Login';
import Calculator from './MyComponents/Calculator';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/homepage" element={<Layout body={<Homepage/>} />} />
          <Route index element={<Layout body={<Homepage/>} />} />
          <Route path="about" element={<Layout body={<About/>} />} />
          <Route path="contact" element={<Layout body={<Contact/>} />} />
          <Route path="advertise" element={<Layout body={<Advertise/>} />} />
          <Route path="sell" element={<Layout body={<Sell/>} />} />
          <Route path="get" element={<Layout body={<Get/>} />} />
          <Route path="signup" element={<Layout body={<Signup/>} />} />
          <Route path="login" element={<Layout body={<Login/>} />} />
          <Route path="calculator" element={<Layout body={<Calculator/>} />} />

          {/* <Route path="*" element={<About00 />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
