import  {connect} from 'react-redux';
import React, { Component } from 'react';
import SettingSideBar from '../../components/settingSideBar/index.js';
import './setting.css';
import SettingBody from '../../components/settingBody/index.js';


class Settings extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class='container'>
        <SettingSideBar/>
        <SettingBody/>
      </div>
    );
  }
}

export default Settings;
