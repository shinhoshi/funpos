import React from 'react';
import { UserInfo } from './UserInfo';
import styles from './style.css';


export class CurrentUser extends React.Component {
  render() {
    return (
        <div className= "wrapper">
          <div className="UserInfo">
            <UserInfo />
          </div>
          <h2>
            拍手できる数：100
          </h2>
          <h2>
            拍手された数：0
          </h2>
        </div>
    );
  }
}
