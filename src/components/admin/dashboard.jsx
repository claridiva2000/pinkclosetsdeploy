import React from 'react';
import Newslettermenu from './newsletter/newslettermenu';
import Blogmenu from './blogentries/blogmenu';
import Newblog from './blogentries/newblog'
import './dashboard.css';

const Dashboard = () => {
  

  return (
    <div className='dashboard'>
      {/* <Newblog/> */}
      <h2>Admin Dashboard</h2>
      <Newslettermenu/>
      <Blogmenu/>
      
    </div>
  );
};

export default Dashboard;
