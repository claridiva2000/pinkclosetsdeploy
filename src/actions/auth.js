import axios from 'axios';
// import { setAlert } from './alert';
// import {
//   REGISTER_SUCCESS,
//   REGISTER_FAIL,
 
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,

//   LOGOUT
// } from './types';


// //Register Chef
// export const register = ({
//   firstname,
//   lastname,
//   location,
//   profilepic,
//   email,
//   password
// }) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };
//   const body = JSON.stringify({
//     firstname,
//     lastname,
//     location,
//     profilepic,
//     email,
//     password
//   });

//   try {
//     const res = await axios.post(
//       'https://chefportfoliofinal.herokuapp.com/chefs/register',
//       body,
//       config
//     );

//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data //token is in here
//     });
//     dispatch(loadChef());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: REGISTER_FAIL
//     });
//   }
// };

// //Login Chef
// export const login = (email, password) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   const body = JSON.stringify({ email, password });

//   try {
//     const res = await axios.post(
//       'https://chefportfoliofinal.herokuapp.com/chefs/login',
//       body,
//       config
//     );

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data //token is in here
//     });

//     dispatch(loadChef());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: LOGIN_FAIL
//     });
//   }
// };

// //LOGOUT
// export const logout = () => dispatch => {
//   dispatch({ type: LOGOUT });
// };

