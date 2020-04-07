import React , { Component } from 'react';
import './sideBarHeader.css';

const SideBarHeader = props => {

  return (
    <div class= 'sideBar-header-container'>
     <p class= "sideBar-header">{props.sideBarHeader}</p>
    </div>
  );

}

export default SideBarHeader;
