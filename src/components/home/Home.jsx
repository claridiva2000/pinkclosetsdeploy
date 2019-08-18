import React from 'react'


const Home = props => {
  return (
    <div>
      <div class="parallax-container">
      <div class="parallax"><img src='https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' style={{width:'100%'}} alt='home'/></div>
    </div>
    <div class="section white">
      <div class="row container">
        <h2 class="header">Parallax</h2>
        <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, atque deserunt. Fugit id facilis nostrum eum nobis, dolore commodi soluta hic rem quas quod ullam placeat dolores velit architecto eaque!</p>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src='https://images.unsplash.com/photo-1461418559055-6f020c5a91e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80' style={{width:'100%'}} alt='home'/></div>
    </div>
      {/* <div> <img src='https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' style={{width:'100%'}} alt='home'/>  </div> */}
    </div>
  )
}


export default Home
