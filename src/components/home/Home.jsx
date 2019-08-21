import React from 'react';
import './home.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 8}px,${y / 5}px,0)`;

const Home = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 15, tension: 900, friction: 200 }
  }));

  return (
    <div className="home">
       <div style={{ height: '70vh' }}>
        <div
          className="box3container"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
          style={{ height: '180vh', marginTop:'-80' }}
        >
          <h2 style={{textShadow:'-2px 2px 3px rgba(150, 150, 150, 1)', position: 'relative',
  top: '300px'}}>Let all things be done decently and in order.</h2>
          <h3 style={{textShadow:'-2px 2px 3px rgba(150, 150, 150, 1)', position: 'relative',
  top: '300px'}}>1 Corinthians 14:40</h3>

          <animated.div
            className="box3"
            style={{
              transform: props.xy.interpolate(trans1),
              width: '110%',
              height: '900px'
            }}
          >
          
          </animated.div>
        </div>
      </div>
      <div className="box2" style={{ height: '50vh' }}>
        <h2 style={{ position:'relative', top:'10px', width:'90%' }}>
          Pink|Closets is dedicated to helping you get your life in order by
          organizing the things that are a part of you.
        </h2>
        <p>Join our newsletter!</p>
        <form style={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', height:'100px', marginBottom:'50px' }}>
          <input type="text" placeholder="name" style={{padding:'10px', width:'300px'}} />
          <input type="email" placeholder="email" style={{padding:'10px', width:'300px'}} />
        </form>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around', 
            width:'100px',
            fontSize: '2rem',
            height:'150px'
          }}
        >
          <i className="fab fa-instagram" />{' '}
          <i className="fab fa-facebook-square" />
        </div>
      </div>
      <div className="box1" style={{height:'60vh', padding:'30px'}}>
        <h2 style={{marginBottom:'510px'}}>
          "Peace and Order on the Outside Creates Peace and Order on the
          Inside."
        </h2>
      </div>
    
    
     
      <div className="box4" style={{height:'40vh', padding: '30px'}}>

      <div style={{display:'flex', flexDirection:'row',  width:'80%'}}><img src="https://p3plcpnl0791.prod.phx3.secureserver.net:2083/cpsess2089678795/viewer/home%2fj9xj14remmy9%2fpublic_html/customer.jpg" alt="review1" style={{width:'220px', height:'270px', borderRadius:'100%'}}/> <h4 style={{position: 'relative', bottom:'30px', width:'70%'}}> 
      <span style={{color:"#955465", fontSize:'4rem'}}>"</span>I hired <span style={{color:"#955465", fontSize:'2rem'}}>Pink|</span>Closets to come help me with a move. My daughters’ room was a mess. They had cleaned up and packed within 2 hours. They were very efficient and that job was done very well. Their prices were very reasonable.  I was impressed with how professional they were. <br/>I will be hiring them again very soon to help with two other rooms.<span style={{color:"#955465", fontSize:'4rem'}}>"</span></h4></div>  
      

       
        {/* <p>Text Me for a Quote!</p>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" placeholder="cell#" />
          <input type="text" placeholder="name" />
          <textarea placeholder="message" cols="30" rows="5" />
        </form> */}
      </div>
    </div>
  );
};

export default Home;
