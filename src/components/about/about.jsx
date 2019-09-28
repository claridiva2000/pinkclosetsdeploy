import React from 'react';
import './about.css';
import owner from '../../assetts/owner.png';
import janell from '../../assetts/manager.png'

const about = props => {
  return (
    <div className='aboutCont' >
    <div className='width'>
    <img className='dawneshia' src={owner} alt='owner' />
    
    <p style={{paddingTop:'50px'}}>Dawneshia Webb is the Owner and Founder of Pink|Closets. Growing up she has always had a passion for organizing and arranging. In 2016 Dawneshia decided to step out on faith and turn her passion into a business. Pink|Closets was offially founded in February of 2018.</p>
    <p>Dawneshia is married with 3 wonderful kids. She has her Associates Degree in Business Administration, and she is also a Certified Lisenced Wedding Coordinator.</p>
    <p>Pink|Closets is more than just organizing your home, it's organizing your life. The vision of our company is 1 Corithians 14:40.</p>
    <h3>"But all things should be done decently and in order"</h3>
    </div>

    <div className='width' style={{marginTop:'100px', paddingBottom:'150px'}} >
    <img className='janell' src={janell} alt='owner' />
    
     
    <p style={{paddingTop:'50px'}}>Janell Gines is the office manager for Pink Closets. She’s been with the company since it was founded. 

</p>
<p>Janell, like Dawneshia loves to help others to organize their homes. Janell has been in office management for 20 years, so Dawneshia knew she would be a perfect asset to the team. 
She has four daughters and one son. Being a single mother, great organizing skills were the key to her success. She is very passionate about the vision of Pink Closets, and helps execute it perfectly. 
 </p>
<p>Janell is married and has two amazing grandchildren. Because of her recent wedding and new grandchildren, her passion for helping others has only gotten stronger. 
</p>
    
    </div>


   
    </div>
  )
}


export default about
