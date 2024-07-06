import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './Home';
import Formul from './Formul';
import Info from './info';
import Propos from './propos';
function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Formul">About</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/Formul" element={<Formul />} />
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<Info />} />
          <Route path="/propos" element={<Propos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
