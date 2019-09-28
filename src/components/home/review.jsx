import React from 'react';
import Swiper from 'react-id-swiper';
import client from '../../assetts/Capture.JPG'

const LoopModeInfinityLoop = () => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <Swiper {...params} >
      <div style={{padding:'5px', fontSize:'1.6rem', display:'flex', flexDirection:'row',justifyContent:'center'}}> <img src={client} alt="" style={{borderRadius:'100%', width:'100px'}}/><p style={{width:'80%', paddingTop:'10px'}}>"I hired Pink Closets to come help me with a move. My daughters’ room was a mess. They cleaned up and packed within 2 hours. They were very efficient and that job was done very well. Their prices were very reasonable.  I was impressed with how professional they were." <br/> -Jessica</p>
      </div>
      <div style={{padding:'5px', fontSize:'1.6rem', display:'flex', flexDirection:'row',justifyContent:'center'}}> 
      {/* <img src={client} alt="" style={{borderRadius:'50%', width:'150px'}}/> */}
      <p style={{width:'70%', paddingTop:'30px'}}>"Pink Closet's is the best!" <br/>
      -Jasmine</p></div>
     
    </Swiper>
  )
};
export default LoopModeInfinityLoop;