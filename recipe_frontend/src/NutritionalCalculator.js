import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function NutritionalCalculator() {
  const [customIngredients, setCustomIngredients] = useState('');
  const [showModal, setShowModal] = useState(false);

  const calculateCustomNutrition = async () => {
    setShowModal(true);

    //TODO: Need to implement
    // try {
    //   const response = await axios.post('http://localhost:8000/api/custom-nutrition/', { ingredients: customIngredients });
    // } catch (error) {
    //   console.error('Error calculating custom nutrition:', error);
    // }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <h2>Nutritional Calculator</h2>
      <Form.Control
        type="text"
        value={customIngredients}
        onChange={(e) => setCustomIngredients(e.target.value)}
        placeholder="Enter ingredients for custom meal (comma-separated)"
        className="mb-3"
      />
      <Button variant="primary" onClick={calculateCustomNutrition}>Calculate Nutrition</Button>
      
      {/* TODO: need to update model  */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Work in Progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The nutritional calculation feature is currently under development. Please check back later!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default NutritionalCalculator;
