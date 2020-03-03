import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Card, CardTitle, CardBody, Container, Row, Col } from 'reactstrap';
import { startOfWorkday } from './startOfWorkday.js';
import { toolsAndMaterials } from './toolsAndMaterials.js';
import { elementsOfGarden } from './elementsOfGarden.js';
import { questionsForEmployer } from './questionsForEmployer.js';
import { instructionsForGardener } from './instructionsForGardener.js';
import { commonTasks } from './commonTasks.js';
import { healthAndSafety } from './healthAndSafety.js';
import { negotiatingPay } from './negotiatingPay.js';
import { clarificationQuestions } from './clarificationQuestions.js';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='header'>
        <img src="./images/header_img.png" alt="female gardener drawing"></img>
        <h1>
          ¡Hola!
      </h1>
        <p>
          Este material provee el vocabulario básico en inglés para las personas que trabajan en jardinería.  Todo el contenido de este libro
          fue desarrollado por jornaleros y jornaleras que trabajen en la jardinería.  Practique para mejorar la comunicación con sus empleadores
          y para tener éxito en el trabajo.
        </p>

        <Card className='guide'>
          <CardTitle>
            <h2 style={{ 'textAlign': 'center' }}>Cómo usar esta guía</h2>
          </CardTitle>
          <CardBody>
            <Container>
              <Row style={{ 'textAlign': 'center' }}>
                <Col xs={{ size: 5 }}>
                  <b>Inglés</b> <br></br>
                </Col>
                <Col xs={{ size: 7 }}>
                  <b>What will I be doing today?</b> <br></br>
                </Col>
              </Row>
              <Row style={{ 'textAlign': 'center' }}>
                <Col xs={{ size: 5 }}>
                  Pronunciación <br></br>
                </Col>
                <Col xs={{ size: 7 }}>
                  [Guat wil ai bi duin tudei] <br></br>
                </Col>
              </Row>
              <Row style={{ 'textAlign': 'center' }}>
                <Col xs={{ size: 5 }}>
                  <i>Español</i>
                </Col>
                <Col xs={{ size: 7 }}>
                  <i>¿Qué voy a hacer hoy?</i>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </div>

      <div className="sections">
        <h2>Secciones</h2>
        <Router>
          <Link to="/">1. Inicio del día de trabajo {/*(Start of the Workday)*/}</Link><br></br>
          <Link to="/toolsAndMaterials">2. Herramientas y materiales para jardinería {/*(Gardening Tools & Materials)*/}</Link><br></br>
          <Link to="/elementsOfGarden">3. Elementos en un jardín {/*(Elements of the Garden)*/}</Link><br></br>
          <Link to="/questionsforEmployer">4. Preguntas para el/la empleador/a {/*(Questions for the Employer)*/}</Link><br></br>
          <Link to="/instructionsForGardener">5. Instrucciones para el/la jardinero/a {/*(Instructions for the Gardener)*/}</Link><br></br>
          <Link to="/commonTasks">6. Tareas comunes de jardinería {/*(Common Gardening Tasks)*/}</Link><br></br>
          <Link to="/healthAndSafety">7. Equipo de seguridad {/*(Health and Safety)*/}</Link><br></br>
          <Link to="/negotiatingPay">8. Negociación de pago {/*(Negotiating Pay)*/}</Link><br></br>
          <Link to="/clarificationQuestions">9. Preguntas para aclarar {/*(Questions for Clarification)*/}</Link><br></br>
        </Router>
      </div>

      <br></br>
      <hr></hr>

      <div className="router">
        <Router>
          <Route exact path="/" component={startOfWorkday}/>
          <Route path="/toolsAndMaterials" component={toolsAndMaterials} />
          <Route path="/elementsOfGarden" component={elementsOfGarden} />
          <Route path="/questionsforEmployer" component={questionsForEmployer} />
          <Route path="/instructionsForGardener" component={instructionsForGardener} />
          <Route path="/commonTasks" component={commonTasks} />
          <Route path="/healthAndSafety" component={healthAndSafety} />
          <Route path="/negotiatingPay" component={negotiatingPay} />
          <Route path="/clarificationQuestions" component={clarificationQuestions} />
        </Router>

      </div>

    </div>
  );
}

export default App;
