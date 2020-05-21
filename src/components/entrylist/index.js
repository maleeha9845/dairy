import  {connect} from 'react-redux';
import React, { Component } from 'react';
import SideBarBtn from '../sideBarBtn/index.js';

class List extends React.Component {
  constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
      return(
          <div>
          {this.props.listItems.map((listItem)=>{
              return(
                <div >
                <SideBarBtn lable='Add an entry '
                  onClick = { this.props.onClick}
                  lable = {listItem.name}
                  active = '1'
                />
                </div>
              )

            })
          }
          </div>
      )
    }
}
export default List;
