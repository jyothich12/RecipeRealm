import React, { useState } from 'react';
import { Container, Form, Button, Collapse, Modal, ListGroup, Row, Col } from 'react-bootstrap';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import axios from 'axios';

function RecipeSearch() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [expandedRecipe, setExpandedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modelData, setModelData] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/recipes/', { ingredients });
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleExpand = (recipeId) => {
    setExpandedRecipe(expandedRecipe === recipeId ? null : recipeId);
  };

  const handleShowInstructions = async (recipeId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/recipe-information/?recipe_id=${recipeId}`);
      let recipe = {};
      recipe.title = response.data.title;
        
      const ingredientsList = response.data.extendedIngredients.map(ingredient => {
        return `<li>${ingredient.name}: ${ingredient.amount} ${ingredient.unit}</li>`;
      }).join('');

      recipe.body = `
      <h4>Ingredients:</h4>
      ${response.data.extendedIngredients.length > 0 ? `<ul>${ingredientsList}</ul>` : ''}
      <br/>
      <h4>Instructions:</h4>
      <p>${response.data.instructions}</p>
    `;
      setModelData(recipe);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching recipe instructions:', error);
    }
  };


  const handleShowMacros = async (recipeId, title) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/recipe-macros/?recipe_id=${recipeId}`);
      let data = {};
      data.title = title;
      data.body =  `
        <h4>Nutrition Information</h4>
        <p><strong>Calories:</strong> ${response.data.calories}</p>
        <p><strong>Carbs:</strong> ${response.data.carbs}</p>
        <p><strong>Fat:</strong> ${response.data.fat}</p>
        <p><strong>Protein:</strong> ${response.data.protein}</p>
        <h5>What's Good:</h5>
        <ul>
          ${response.data.good.map(item => `<li>${item.title}: ${item.amount} (${item.percentOfDailyNeeds}% of daily needs)</li>`).join('')}
        </ul>
        <h5>What's Bad:</h5>
        <ul>
          ${response.data.bad.map(item => `<li>${item.title}: ${item.amount} (${item.percentOfDailyNeeds}% of daily needs)</li>`).join('')}
        </ul>
      `;
      setModelData(data);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching recipe instructions:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModelData(null);
  };

  const getMissedIngredients = (recipe) => {
    const ingredientList = ingredients.split(',').map(item => item.trim().toLowerCase());
    const missed = recipe.missedIngredients.map(ingredient => ingredient.name.toLowerCase());
    const additionalMissed = ingredientList.filter(ingredient => !recipe.usedIngredients.some(used => used.name.toLowerCase() === ingredient));
    return [...missed, ...additionalMissed].join(', ');
  };

  const getUsedIngredients = (recipe) => {
    return recipe.usedIngredients.map(ingredient => ingredient.name).join(', ');
  };

  return (
    <Container className="mt-4">
      <h2>Recipe Search</h2>
      <Form.Control
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients (comma-separated)"
        className="mb-3"
      />
      <Button variant="primary" onClick={fetchRecipes}>Get Recipes</Button>

      {recipes.length > 0 && (
        <ListGroup className="mt-4">
          {recipes.map(recipe => (
            <ListGroup.Item key={recipe.id} className="d-flex align-items-center flex-column">
              <Row className="w-100 align-items-center">
                <Col xs={10} onClick={() => handleExpand(recipe.id)} className="d-flex align-items-center">
                  <div className="me-2">
                    {expandedRecipe === recipe.id ? <FaCaretUp /> : <FaCaretDown />}
                  </div>
                  <div>
                    {recipe.title}
                  </div>
                </Col>
                <Col xs={2} className="text-end">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{
                      width: expandedRecipe === recipe.id ? '100px' : '50px',
                      height: expandedRecipe === recipe.id ? '100px' : '50px',
                      objectFit: 'cover',
                      transition: 'width 0.3s, height 0.3s'
                    }}
                  />
                </Col>
              </Row>
              <Collapse in={expandedRecipe === recipe.id}>
                <div className="mt-3 w-100">
                  <Row>
                    <Col xs={10}>
                      <div>
                        <strong>Used Ingredients:</strong> {getUsedIngredients(recipe)}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={10}>
                      <div className="mt-2">
                        <strong>Missed Ingredients:</strong> {getMissedIngredients(recipe)}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={2} className="mt-3">
                      <Button 
                        variant="info"
                        onClick={() => handleShowInstructions(recipe.id)}
                      >
                        Show Instructions
                      </Button>
                    </Col>
                    <Col xs={2} className="mt-3">
                      <Button 
                        variant="info"
                        onClick={() => handleShowMacros(recipe.id, recipe.title)}
                      >
                        Show Macros
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Collapse>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modelData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div dangerouslySetInnerHTML={{ __html: modelData?.body }} />
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

export default RecipeSearch;
