import React, { useState } from 'react';
import Logo from './logo';
import { NavLink, withRouter } from 'react-router-dom';
import auth0Client from '../../utils/auth';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './navbar.css';

function Navbar(props) {
  const [menu, setMenu] = useState(true);

  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (
    
    <>
        <Logo />

        <Accordion defaultActiveKey="1" style={{width:'100%', background:'#FFF9F3'}}>
          <Card style={{ background:'#FFF9F3'}}>
            <Card.Header style={{height:'50px'}}>
              <Accordion.Toggle variant="link" eventKey="0" style={{fontSize:'1.5rem', background:'none', marginTop:'-20px'}}>
              <i  className="fas fa-bars" ></i>  Menu
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul
                  className='navlinks'
                >
                  <li
                  
                  >
                    <NavLink to="/" activestyle={activelinkStyle}>
                      Home
                    </NavLink>
                  </li>
                  <li
                  
                  >
                    <NavLink to="/about" activestyle={activelinkStyle}>
                      About
                    </NavLink>
                  </li>
                  <li
                 
                  >
                    <NavLink to="/services" activestyle={activelinkStyle}>
                      Services
                    </NavLink>
                  </li>
                  <li
                   
                  >
                    <NavLink to="/gallery" activestyle={activelinkStyle}>
                      Gallery
                    </NavLink>
                  </li>
                  <li
                   
                  >
                    {/* <NavLink to="/blog" activestyle={activelinkStyle}>
                      Blog
                    </NavLink>
                  </li>
                  <li
                   
                  >
                    <NavLink to="/contact" activeStyle={activelinkStyle}>
                      Contact
                    </NavLink>
                  </li>
                  <li
                   
                  > */}
                    {!auth0Client.isAuthenticated() && (
                      <p
                        activestyle={activelinkStyle}
                        // onClick={auth0Client.signIn}
                        // style={{ cursor: 'pointer', color: '#955465' }}
                      >
                         <NavLink to="/login" activeStyle={activelinkStyle}>Admin</NavLink>
                        
                      </p>
                    )}
                    {auth0Client.isAuthenticated() && (
                      <p
                        activestyle={activelinkStyle}
                        onClick={() => {
                          signOut();
                        }}
                        style={{ cursor: 'pointer', color: '#955465' }}
                      >
                        Sign Out
                      </p>
                    )}
                  </li>
                  <li>
                  <a href='https://www.instagram.com/pink_closets_18/'> <i className="fab fa-instagram"></i></a> 
           
           <a href='https://www.facebook.com/pinkclosets18/'><i className="fab fa-facebook-square"></i></a> 
           
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

      </>
   
 
  );
}

export default withRouter(Navbar);

// import React from 'react';
// import Logo from './logo';
// import {NavLink, Link} from 'react-router-dom';

// const navbar = () => {
//   return (
//     <div style={{ background: '#EED6DC', borderBottom:'1px solid', marginTop:'0px', padding:'0px'}}>
//       <nav style={{ listStyle:'none', }}>
//         <Logo />
//         <ul style={{display:'flex',listStyle:'none', justifyContent: 'space-between', width: '1000px', margin: 'auto', marginTop:'10px', fontSize: '1.3rem', textAlign: 'center'}}>
//           <li><NavLink to='/' style={navlinkStyle} activeStyle={activelinkStyle} >Home</NavLink>  <img
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px', left:'5px' }}/> </li>
//           <li><NavLink to='/about' style={navlinkStyle} activeStyle={activelinkStyle}>About</NavLink><img
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
//           <li><NavLink to='/services' style={navlinkStyle} activeStyle={activelinkStyle}>Services</NavLink><img
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
//           <li><NavLink to='/gallery' style={navlinkStyle} activeStyle={activelinkStyle}>Gallery</NavLink><img
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
//           <li><NavLink to='/blog' style={navlinkStyle} activeStyle={activelinkStyle}>Blog</NavLink><img
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
//           <li><NavLink to='/contact' style={navlinkStyle} activeStyle={activelinkStyle}>Contact</NavLink><img
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
//           <li><NavLink to='/signin' style={navlinkStyle} activeStyle={activelinkStyle}>Admin</NavLink><img
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px', visibility:'hidden' }}/></li>
//         </ul>
//        </nav>
//     </div>
//   );
// };

// export default navbar;

// const navlinkStyle = {
//   textDecoration: 'none',
//   color: 'black'
// }

const activelinkStyle = {
  fontWeight: 'bold'
};
