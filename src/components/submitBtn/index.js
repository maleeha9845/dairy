import React from 'react';
import './submit.css';


const SubmitBtn = props => {
  return (
    <div>
    <button onClick={props.myButton} class= "submitbutton" >
      <p class="submitbuttontext">{props.lable}</p>

    </button>
    </div>
  );
}

export default SubmitBtn;
