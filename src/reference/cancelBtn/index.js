import React , { Component } from 'react';
import './cancelBtn.css';

import {MdMoreHoriz} from 'react-icons/md';




const CancelSideBarBtn = props => {

function Icon(name){
  return (name);
}

  return (
    <div >

      <button class ='cancel-btn' onClick = {props.onClick} >
        {Icon(<MdMoreHoriz size={20} color= 'white' />)}
      </button>
    </div>
  );

}

export default CancelSideBarBtn;
