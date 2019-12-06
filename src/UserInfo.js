import React, { Component } from 'react';

export class UserInfo extends React.Component {
  render() {
    return (
        <div>
          <div>
            <img src= "yuki.png" alt="yuki"/>
          </div>
          <div>
            <select  className= "SelectName">
              <option value="yuki">yuki</option>
              <option value="satoko">satoko</option>
              <option value="juma">juma</option>
              <option value="moe">moe</option>
            </select>
          </div>
        </div>
    );
  }
}
