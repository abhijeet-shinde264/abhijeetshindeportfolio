import React,{useEffect,useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './NavBar/Navigation';
import Home from './Pages/HomePage/Homepage';
import './App.css';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from './components/Footer';
import Preloader from './components/Pre';

import About from './Pages/About/About';

import Projects from './Pages/Projects/Projects';

import ScrollToTop from './components/ScrollOnTop';


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Projects/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
