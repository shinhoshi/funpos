import React from 'react';
import { UserInfo } from './UserInfo';
import { ApplauseZone } from './ApplauseZone';
import styles from './style.css';


export class CurrentUser extends React.Component {
  render() {
    return (
        <div className= "CurrentUser">
          <div className="UserInfo">
            <UserInfo />
          </div>
          <div>
            <h2>
              拍手できる数：100
            </h2>
          </div>
          <div>
            <h2>
              拍手された数：0
            </h2>
          </div>
        </div>
    );
  }
}
