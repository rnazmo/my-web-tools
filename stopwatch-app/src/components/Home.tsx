import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title as="h1" className="text-center mb-4">Welcome to Time Tools</Card.Title>
              <Card.Text>
                This application provides you with useful time management tools:
              </Card.Text>
              <ul>
                <li>Stopwatch</li>
                <li>Timer</li>
              </ul>
              <Card.Text>
                Choose a tool to get started:
              </Card.Text>
              <div className="d-flex justify-content-around mt-4">
                <Button as={Link} to="/stopwatch" variant="primary">Go to Stopwatch</Button>
                <Button as={Link} to="/timer" variant="success">Go to Timer</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
