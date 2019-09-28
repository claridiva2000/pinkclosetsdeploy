import React from 'react';
import './navbar.css';
import closetsLogo from "../../assetts/Logo.png"

const logo = () => {
  return (
    <div className='logo'>

    {/* <h1 className='pc'>  
    <span className='pink'>Pink</span>
      <span style={{ color: '#212529', fontSize: '4rem' }}>|Closets</span></h1> */}
      <img className='logoImg' src={closetsLogo} alt='logo'/>
      
        <p style={{position:'relative', top:'-190px',  width:'90%', margin:'auto', paddingTop:'5px', fontSize:'1.9rem'}}>Professional Home Organizer & Declutter Specialist </p>
     
      </div>
      
   
  );
};

export default logo;
