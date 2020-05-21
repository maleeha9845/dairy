import React , { Component } from 'react';
import './listBtn.css';
import goa from '../images/goa.png';


const ListBtn = props => {

return(
    <div>
     <button
        class = { props.active === props.index ? "list-btn-onslect" : "list-btn"}
        onClick = {props.onClick}
        >
        <div class = 'lable'>
          <div class = 'text-lable'>
              <p class={ props.active === props.index ? "list-btn-text-onSelect" : "list-btn-text"} >
              {props.lable}
              <p class={ props.active === props.index ? "list-btn-date-onSelect" : "list-btn-date"} >
              {props.time} {props.place} {props.date}
              </p>
              <p class={ props.active === props.index ? "list-btn-location-onSelect" : "list-btn-location"} >
              {props.location}
              </p>
              </p>
          </div>
          <div class = 'image'>
              <img src={goa} alt="Logo"  width={128} height={87} style={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            overflow: 'hidden',
                          }}/>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ListBtn;
