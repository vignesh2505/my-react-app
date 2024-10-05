// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}


export default App;


