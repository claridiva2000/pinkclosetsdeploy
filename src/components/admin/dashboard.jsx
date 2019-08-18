import React from 'react';
import Newslettermenu from './newsletter/newslettermenu';
import Blogmenu from './blogentries/blogmenu'
import './dashboard.css';

const Dashboard = () => {
  

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Newslettermenu/>
      <Blogmenu/>
    </div>
  );
};

export default Dashboard;
