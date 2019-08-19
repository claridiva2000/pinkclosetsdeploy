import React, { useState, useEffect, Fragment } from 'react';
import Blogcard from './blogcard';
import axios from 'axios';
import '../dashboard.css';

const Blogboard = () => {
  const [post, setPost] = useState([]);
  
  const [searchvalue, setSearchvalue] = useState('');

  const handleSearchInputChanges = e => {
    setSearchvalue(e.target.value);
  };

  const filteredposts = post.filter(post =>
    post.title.toLowerCase().includes(searchvalue.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://jsonplaceholder.typicode.com/posts?limit=10'
      );

      setPost(result.data);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      {console.log(post)}
      {console.log(searchvalue)}
      <form className="search">
        <input
          style={{ width: '20%' }}
          type="text"
          placeholder="Search"
          value={searchvalue}
          onChange={handleSearchInputChanges}
        />
      </form>
  <Blogcard posts={filteredposts}/>
      
    </Fragment>
  );
};

export default Blogboard;
