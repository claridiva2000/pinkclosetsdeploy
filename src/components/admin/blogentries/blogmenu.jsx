import React, { useState } from 'react';
import Blogboard from './blogboard';
import '../dashboard.css';
const Blogmenu = () => {
  const [blogMenu, setBlogMenu] = useState(false);

  return (
    <div>
      <div style={{ border: '1px black solid' }}>
        <div className="emailToggle">
          <h3>Blog Entries</h3>
          <div className="emailSwitch" onClick={() => setBlogMenu(!blogMenu)}>
            {blogMenu ? (
              <i className="fas fa-toggle-on" />
            ) : (
              <i className="fas fa-toggle-off" />
            )}
          </div>
        </div>
        {blogMenu ? (
          <div className="emailList">
         <Blogboard/>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Blogmenu;
