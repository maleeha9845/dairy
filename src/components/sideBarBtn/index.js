import React , { Component } from 'react';
import './sideBarBtn.css';


const SideBarBtn = props => {

  return(
    <div class = 'sideBar-container'>
    <button
        class = { props.active === props.index ?
           "sideBar-btn-onslect" :
           (props.parent=== 'parent'?
            "sideBar-parent": "sideBar-btn"
             )
            }
         onClick = {props.onClick} >
       <p
         class={ props.active === props.index ?
         "sideBar-btn-text-onSelect" :
           (props.color=== 'holiday'?
             "sideBar-btn-text-holiday" :
            (props.color=== 'events'?
                "sideBar-btn-text-events" :
             (props.color=== 'travel'?
                 "sideBar-btn-text-travel" :
               (props.color=== 'recipies'?
                   "sideBar-btn-text-recipies" :
                      "sideBar-btn-text")
                    )
                  )
                )
              } >
        {props.lable}
       </p>
       <p
       class={ props.active === props.index ?
         "sideBar-btn-text-onSelect" :
          (props.color=== 'holiday'?
            "sideBar-btn-text-holiday" :
            (props.color=== 'events'?
              "sideBar-btn-text-events" :
            (props.color=== 'travel'?
              "sideBar-btn-text-travel" :
            (props.color=== 'recipies'?
               "sideBar-btn-text-recipies" :
                "sideBar-btn-text"
              )
            )
          )
        )
      } >
      {props.count}
      </p>
     </button>
    </div>
  );
 }

export default SideBarBtn;
