import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SkillsAndCertifications from './Pages/SkillsAndCertifications';
import Volunteer from './Pages/Volunteer';
import Experiences from './Pages/Experiences';
import { Link } from 'react-router-dom';
import Posts from './components/Posts';

import './styles.css';

function App() {
  return (
    <Router>
      <div className="app-container">
      <div className="content-container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SkillsAndCertifications" element={<SkillsAndCertifications/>}/>
          <Route path="/Experiences" element = {<Experiences/>}/>
          <Route path="/Volunteer" element = {<Volunteer/>}/>
          <Route path="/Posts" element = {<Posts/>}></Route>
        </Routes>
        
      </div>
      
      <footer>
  <p>© 2025 Shantha Kumari Arumugam | All Rights Reserved</p>
  
    
    <ul>
            <li><Link to="/Contact">Click here to Contact Me</Link></li>
        </ul>
  
  
</footer>
      </div>
     
        
      
    </Router>
  );
}

export default App;
