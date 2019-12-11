import React, { Component } from 'react';
import styles from './style.css';

const userinfo = [
  {key: 0, name: "yuki", userIcon: <img src="yuki.png"/>, canApplause: 100, beApplaused: 0},
  {key: 1, name: "satoko", userIcon: <img src="satoko.png"/>, canApplause: 100, beApplaused: 0},
  {key: 2, name: "juma", userIcon: <img src="juma.png"/>, canApplause: 100, beApplaused: 0},
  {key: 3, name: "moe", userIcon: <img src="moe.png"/>, canApplause: 100, beApplaused: 0},
];


export class UserInfo extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        userinfo : [],
        value: '',
      };
      this.onChange = this.onChange.bind(this);
      this.handleImage = this.handleImage.bind(this);
    // localStorage.setItem('UserInfo', JSON.stringify(this.state));
}
  // 選択されたユーザーのidを識別する
  onChange(props){
    return (
      <div>
        {props.name}
      </div>
    );};

  // ユーザーidからアイコンを表示する
  handleImage(e) {
    if (e.target.value === 0) {
      return (<img src="yuki.png"/>)
    } else if (e.target.value === 1) {
      return (<img src="satoko.png"/>)
    } else if (e.target.value === 2) {
      return (<img src="juma.png"/>)
    } else if (e.target.value === 3) {
      return (<img src="moe.png"/>)
    };
  };

  render() {
    return (
        <div className="UserInfo">
          <onChange name="aaa"/>
          <div
            handleImage={this.handleImage}>

          </div>
          <select
          onChange={this.onChange}
          >
            { userinfo.map( userinfo => <option value={userinfo.key}>{userinfo.name}</option>) }
          </select>
        </div>
    )
  }
}
