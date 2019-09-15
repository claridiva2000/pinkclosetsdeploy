import React from 'react';
import './login.css';

const login = () => {




  
  return (
    <div className="loginCont">
      <form action="" className="login">
        <h2>Admin Login</h2>
        <input className="input" lable="login" placeholder="Login" />
        <input className="input" type='password' lable="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default login;
