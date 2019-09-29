import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intro from './Intro';
import LoopModeInfinityLoop from './review';
import {Link} from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home" style={{ background: 'white', padding: '15px' }}>
      <div className='width'>
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
              padding: '20px',
              width: '100%',
              margin: 'auto',
              border: '1px solid black',
              fontSize: '2rem',
              opacity: '.95',
              marginBottom: '20px'
            }}
          >
             <Link to='/about'>
            About
            </Link>
          </div> 
        </Col>
        <Col lg className="box2">
          <div
            style={{
              background: 'white',
              padding: '20px',
              width: '100%',
              margin: 'auto',
              border: '1px solid black',
              fontSize: '2rem',
              opacity: '.95',
              marginBottom: '20px'
            }}
          >
             <Link to='/services'>
            Services
            </Link>
          </div>
        </Col>
        <Col lg className="box3">
          <div
            style={{
              background: 'white',
              padding: '20px',
              width: '100%',
              margin: 'auto',
              border: '1px solid black',
              fontSize: '2rem',
              opacity: '.95',
              marginBottom: '20px'
            }}
          >
            <Link to='/gallery'>
            Gallery
            </Link>
          </div>
        </Col>
      </Row>
      <Intro />
      </div>
      <div style={{maxWidth:'1350px', margin:'auto'}}><LoopModeInfinityLoop/></div> 

    </div>
  );
};

export default Home;
