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
  top: '250px'}}>Let all things be done decently and in order.</h2>
          <h3 style={{textShadow:'-2px 2px 3px rgba(150, 150, 150, 1)', position: 'relative',
  top: '250px'}}>1 Corinthians 14:40</h3>

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
      <div className="box2" style={{ height: '80vh' }}>
        <h2 style={{ marginBottom: '500px', width:'80%' }}>
          Pink|Closets is dedicated to helping you get your life in order by
          organizing the things that are a part of you.
        </h2>
      </div>
      <div className="box1" style={{height:'60vh'}}>
        <h2 style={{marginBottom:'710px'}}>
          "Peace and Order on the Outside Creates Peace and Order on the
          Inside."
        </h2>
      </div>
    
     
      <div className="box4" style={{height:'40vh', padding: '30px'}}>
        <h2>Connect</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around', 
            width:'100px',
            fontSize: '2rem'
          }}
        >
          <i className="fab fa-instagram" />{' '}
          <i className="fab fa-facebook-square" />
        </div>

        <p>Join our newsletter!</p>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
        </form>
        <p>Text Me for a Quote!</p>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" placeholder="cell#" />
          <input type="text" placeholder="name" />
          <textarea placeholder="message" cols="30" rows="5" />
        </form>
      </div>
    </div>
  );
};

export default Home;
