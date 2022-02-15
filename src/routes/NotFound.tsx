import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Page not found.</h1>
          <p>Maybe you mistyped something?</p>
          <hr />
          <LinkContainer to='/'>
            <Button>Home</Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
