import React from 'react';
import './services.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const services = () => {
  return (
    <div className="servicesCont">
      <h4>
        Pink Closets strives on providing our clients with excellent customer
        service. We take pride in what we do, and make sure that when we step
        into your home that we are very proffessional. When we leave your home
        we want to know that we have satisified your every need and desire.
        <br/><br/>
        Let's Get Organized!
      </h4>
      
      <div className="services">
        <h2>Pricing</h2>
        <Row className="justify-content-md-center pricing">
          <Col className="columns" md>
            <h2>Phone Consultation</h2>
            <p>Free</p>
            <p>We use this opportunity to get know you and get an idea of your goals and needs.</p>
          </Col>
          <Col className="columns" md>
            <h2>Walk-through Consultation</h2>
            <p>$15 an hour.</p>
          </Col>
          <Col className="columns" md>
            <h2>Mileage</h2>
            <table>
              <tr>
                <td>15-20 mi.</td>
                <td>$10</td>
              </tr>
              <tr>
                <td>21-25 mi.</td>
                <td>$15</td>
              </tr>
              <tr>
                <td>26-30 mi.</td>
                <td>$20</td>
              </tr>
              <tr>
                <td>31-35 mi.</td>
                <td>$25</td>
              </tr>
              <tr>
                <td>36-40 mi.</td>
                <td>$30</td>
              </tr>
            </table>
            
          </Col>
        </Row>
        
        <a className='apptbtn' target="_blank" style={{backgroundColor: '#955465', color: 'white', height: '40px', textTransform: 'uppercase', fontFamily: 'Square Market, helvetica neue, helvetica, arial, sans-serif', letterSpacing: '1px', lineHeight: '38px', padding: '0 28px', borderRadius: '3px', fontWeight: '500', fontSize: '12px', cursor: 'pointer', display: 'inline-block', marginTop:'50px', marginBottom:'50px'}} href="https://squareup.com/appointments/book/2PC386TY3FS4A/pink-closets" rel="nofollow" >Book an Appointment</a>

        <h3>If you prefer, you can call or text us at 816-944-0370.</h3>
        <h3 style={{marginTop:'150px', paddingBottom:'20px'}}>**72 hr. cancellation notice required. If no notice is given, your deposit is forfeit.</h3>
      </div>
    </div>
  );
};

export default services;
