import React , { Component } from 'react';
import './listBtn.css';


const ListBtn = props => {

return(
    <div>
    <button
        class = { props.active === props.index ? "list-btn-onslect" : "list-btn"}
        onClick = {props.onClick}
        >
        <p class={ props.active === props.index ? "list-btn-text-onSelect" : "list-btn-text"} >
        {props.lable}
        </p>
         <p class={ props.active === props.index ? "list-btn-date-onSelect" : "list-btn-date"} >
         {props.time} {props.place} {props.date}
         </p>



      </button>
    </div>
  );
}

export default ListBtn;
