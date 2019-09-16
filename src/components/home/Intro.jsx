import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Intro = () => {
  return (
    <Container style={{maxWidth:'1800px'}}>
      <Row style={{}}>
        <Col lg={8} style={{borderRight:'1px solid lightGrey', padding: '10px'}}>
          <h2 style={{ fontSize: '2.5rem', textDecoration: 'underline', color:'#955465', marginBottom:'10px' }}>
            Pink|Closets is dedicated to helping you get your life in order by
            organizing the things that are a part of you.
          </h2>
          <p style={{ fontSize: '1.8rem' }}>
            There is more to de-cluttering and organizing than meets the eye.
            The objects in your home can represent a memory or emotion. Over
            time those objects can pile up, bringing chaos to the sactuary that
            is your home. We understand that this can be an emotional process
            and specialize in helping clients who have difficulty "letting go".
          </p>
          <img style={{width: '80%', marginBottom:'20px'}}src='https://images.pexels.com/photos/15964/pexels-photo.jpg' alt=''/>

          <h2 style={{ fontSize: '2.5rem', textDecoration: 'underline', color:'#955465', marginBottom:'20px' }}>
            "Peace and Order on the Outside Creates Peace and Order on the
            Inside."
          </h2>

          <p style={{ fontSize: '1.8rem' }}>The time saved from knowing EXACTLY where everything is adds hours back into your week which adds up to years added back to your life that you can spend on yourself or your family. And the stress relief of coming home to a beautiful and orderly home will have an amazing effect on your mood and even your health!</p>
        </Col>
        <Col
          lg={4}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <h2>Meet Dawneshia</h2>
          <img
            src="http://pinkclosets.com/owner.png"
            alt="owner"
            style={{ borderRadius: '100%', width: '250px', margin: 'auto' }}
          />
          {/* <h3 style={{ margin: 'auto', position:'relative', top:'-60px' }}></h3> */}
          <p style={{ fontSize: '1.8rem', marginTop:'-100' }}>
          Owner
          <br/>
          <br/>
            Dawneshia Webb is the Owner and Founder of Pink|Closets. Growing up
            she has always had a passion for organizing and arranging. In 2016
            Dawneshia decided to step out on faith and turn her passion into a
            business. Pink|Closets was offially founded in February of 2018.
            Dawneshia is married with 3 wonderful kids. She has her Associates
            Degree in Business Administration, and she is also a Certified
            Lisenced Wedding Coordinator.
          </p>
          <div style={{borderTop:'1px solid pink', paddingTop:'20px'}}>
            <h3>Connect</h3>
            {/* <a > <i className="fab fa-twitter-square"></i></a>  */}
           
            <a href='https://www.instagram.com/pink_closets_18/'> <i className="fab fa-instagram"></i></a> 
           
            <a href='https://www.facebook.com/pinkclosets18/'><i className="fab fa-facebook-square"></i></a> 
            

            </div> 
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
