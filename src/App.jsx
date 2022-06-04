import { Routes, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Portfolio';
import Contact from './pages/Contact';
import Global from './pages/Global';
import Footer from './pages/Footer';

import './App.css';

function App() {
  return (
    <Router>
      
      <Global/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <div className='d-none d-sm-block'>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
