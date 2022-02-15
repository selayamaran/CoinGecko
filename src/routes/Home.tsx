import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>CoinGecko</h1>
          <Link to="/coins">
            <Button>View Coins</Button>            
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;