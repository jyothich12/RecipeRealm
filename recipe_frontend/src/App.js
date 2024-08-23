import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import Home from './Home';
import RecipeSearch from './RecipeSearch';
import NutritionalCalculator from './NutritionalCalculator';
import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
      <Container fluid className="d-flex flex-column min-vh-100 p-0">
      
        <header className="bg-primary text-white py-3">
          <Container>
            <Nav className="justify-content-between">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/" className="text-white" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/recipe-search" className="text-white" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                  Recipe Search
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/nutritional-calculator" className="text-white" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                  Nutritional Calculator
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/contact-us" className="text-white" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                  Contact Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>

        <Container as="main" className="flex-grow-1 bg-light py-4 root">
          <div className="p-4 shadow rounded">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe-search" element={<RecipeSearch />} />
              <Route path="/nutritional-calculator" element={<NutritionalCalculator />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </div>
        </Container>

        <footer className="bg-dark text-white text-center py-3 mt-auto">
          <Container>
            <p className="mb-0">© 2024 Personalized Recipe Suggestion App</p>
          </Container>
        </footer>
      </Container>
    </Router>
  );
}

export default App;
