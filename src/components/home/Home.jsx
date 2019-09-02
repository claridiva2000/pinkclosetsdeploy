import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intro from './Intro';
import './home.css';

const Home = () => {
  return (
    <div className="home" style={{ background: 'white', padding: '15px' }}>
      <Row
        style={{
          maxWidth: '2000px',
          margin: 'auto',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}
      >
        <Col lg className="box1">
          <div
            style={{
              background: 'white',
              padding: '40px',
              width: '100%',
              margin: 'auto',
              border: '1px solid black',
              fontSize: '2rem',
              opacity: '.95',
              marginBottom: '50px'
            }}
          >
            About
          </div>
        </Col>
        <Col lg className="box2">
          <div
            style={{
              background: 'white',
              padding: '40px',
              width: '100%',
              margin: 'auto',
              border: '1px solid black',
              fontSize: '2rem',
              opacity: '.95',
              marginBottom: '50px'
            }}
          >
            Services
          </div>
        </Col>
        <Col lg className="box3">
          <div
            style={{
              background: 'white',
              padding: '40px',
              width: '100%',
              margin: 'auto',
              border: '1px solid black',
              fontSize: '2rem',
              opacity: '.95',
              marginBottom: '50px'
            }}
          >
            Gallery
          </div>
        </Col>
      </Row>
      <Intro />
    </div>
  );
};

export default Home;
