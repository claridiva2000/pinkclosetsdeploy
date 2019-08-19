import React, {useState} from 'react';
import Newblog from './newblog'

const Blogcard = props => {
  const [modal, setModal] = useState(false);

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
      {props.posts.map(post => (
        <div className="trList" key={post.index} style={{border: '1px solid',  width:'800px', display:'flex', flexDirection: 'column', margin:'auto', marginBottom:'10px'}}>
          <h3 className="listId" style={{margin:'auto', width:'100px'}}>
            {post.userId === 1 && 'Jan, 2019'}
            {post.userId === 2 && 'Feb, 2019'}
            {post.userId === 3 && 'Mar, 2019'}
            {post.userId === 4 && 'Apr, 2019'}
            {post.userId === 5 && 'May, 2019'}
          </h3>
          <h2>{post.title}</h2>
          <div style={{height:'30'}}>See Post</div>
        </div>
          
      ))}

    </div>
  );
};

export default Blogcard;
