import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Core Reqs
// - Student's project code renders without errors.   
// - Student can create a React Component that properly renders the jsx elements.   

// Additional Reqs
// - Student demonstrates proper use of creating a class component with an initialized state. 
// - Student demonstrates proper use of setState. 
// - Student demonstrates ability to create input fields. 
// - Student demonstrates ability to get the value of input fields using a handler method. 
// - Student demonstrates ability to save the input field values to the state. 
// - Student demonstrates ability to properly utilize synthetic events to trigger handlers. 

// 3/7 (Stretch)
// - Student demonstrates ability to create reusable react components. 
// - Student demonstrates ability to pass in props to a component, making it a controlled component.  
// - Student demonstrates ability to render multiple copies of a component using the map method. 
// - Student demonstrates ability to conditionally render elements and/or conditionally change element attributes from a state variable. 
// - Student demonstrates ability to implement API calls, GET and POST methods. 
// - Student demonstrates ability to utilize basic css styling. 
// - Student demonstrates proper use of the object/ destructuring/spread syntax. 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();