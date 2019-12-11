import React, { Component } from 'react';
import styles from './style.css';


export class ApplauseZone extends React.Component {

  constructor(props) {
    super(props);
     this.state = {
        applauseCount: 0,
        canApplause: 100,
        beApplaused: 0
      };
     this.onClick = this.onClick.bind(this);
    }

  onClick() {
    this.setState((prevState, props) => {
      return { applauseCount: prevState.applauseCount + 1,
               canApplause: prevState.canApplause - 2}
     });
   };



  shouldComponentUpdate(nextProps, nextState){
   return true;
 }


  render() {
    return (
      <div>
        <div className="CanApplause">
          {this.state.canApplause}
        </div>
        <div>
          <img
            src="hakushu.jpg"
            alt="hakushu"
            className="imageAppluase"
            onClick={this.onClick}
          />
        </div>
        <div className="ApplauseNumber">
          {this.state.applauseCount}
        </div>
      </div>
    );
  }
}
