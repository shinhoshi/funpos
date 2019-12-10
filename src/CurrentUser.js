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
              拍手できるポイント：100
            </h2>
          </div>
          <div>
            <h2>
              拍手されたポイント：0
            </h2>
          </div>
        </div>
    );
  }
}
