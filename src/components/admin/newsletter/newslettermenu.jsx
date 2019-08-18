import React, { useState } from 'react';
import Newslettersubs from '../newsletter/newslettersubs';
import '../dashboard.css';
const Newslettermenu = () => {
  const [emailMenu, setEmailMenu] = useState(false);

  return (
    <div>
      <div style={{ border: '1px black solid' }}>
        <div className="emailToggle">
          <h3>Newsletter Subscribers</h3>
          <div className="emailSwitch" onClick={() => setEmailMenu(!emailMenu)}>
            {emailMenu ? (
              <i className="fas fa-toggle-on" />
            ) : (
              <i className="fas fa-toggle-off" />
            )}
          </div>
        </div>
        {emailMenu ? (
          <div className="emailList">
            <Newslettersubs />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Newslettermenu;
