import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end style={({ isActive }) => isActive ? { color: 'blue' } : {}}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={({ isActive }) => isActive ? { color: 'blue' } : {}}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={({ isActive }) => isActive ? { color: 'blue' } : {}}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
