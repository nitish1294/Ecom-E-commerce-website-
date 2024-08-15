import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Productdetail from './components/Productdetail';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';


function App() {
  return (
  <div>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path='/productdetail/:id' element={<Productdetail/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  </div>
  );
}

export default App;
