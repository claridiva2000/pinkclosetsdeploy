import React from 'react';
import './navbar.css';

const logo = () => {
  return (
    <div className='logo'>

    {/* <h1 className='pc'>  
    <span className='pink'>Pink</span>
      <span style={{ color: '#212529', fontSize: '4rem' }}>|Closets</span></h1> */}
      <img className='logoImg' src='https://p3plcpnl0791.prod.phx3.secureserver.net:2083/cpsess4042532781/viewer/home%2fj9xj14remmy9%2fpublic_html/Logo.png' alt='logo'/>
      
        <p style={{position:'relative', top:'-190px',  width:'90%', margin:'auto', paddingTop:'5px', fontSize:'1.9rem'}}>Professional Home Organizer & Declutter Specialist </p>
     
      </div>
      
   
  );
};

export default logo;
