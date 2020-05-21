import React , { Component } from 'react';
import './sideBarBtn.css';


const SideBarBtn = props => {

  return(
    <div class = 'sideBar-container'>
    <button
        class = { props.active === props.index ?
           "sideBar-btn-onslect" :(props.parent== 'parent'?
           'sideBar-btn-parent' : "sideBar-btn")
           }
         onClick = {props.onClick} >

         <div class = 'sideBar-sub-div'>
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
                   (props.color=== 'daily'?
                       "sideBar-btn-text-daily" :
                   (props.parent === 'parent'?
                    'sideBar-btn-text-parent': (props.text === 'add'?
                     'sideBar-btn-text-add': "sideBar-btn-text"
                      )
                     )
 ))
                    )
                  )
                )
              } >
        {props.lable}
       </p>
       <p
       class={ props.active === props.index ?
         "sideBar-btn-count-onSelect" :
           (props.color=== 'holiday'?
             "sideBar-btn-count-holiday" :
            (props.color=== 'events'?
                "sideBar-btn-count-events" :
             (props.color=== 'travel'?
                 "sideBar-btn-count-travel" :
               (props.color=== 'recipies'?
                   "sideBar-btn-count-recipies" :
                   (props.color=== 'daily'?
                       "sideBar-btn-count-daily" :
                   (props.parent=== 'parent'?
                    'sideBar-btn-count-parent': (props.text=== 'add'?
                     'sideBar-btn-count-add': "sideBar-btn-count"
                      )
                     )
 ))
                    )
                  )
                )
              } >
      {props.count}
      </p>
      </div>
     </button>
    </div>
  );
 }

export default SideBarBtn;
