import React, { Component } from 'react';

export class UserInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        userIconData: null,
        // プルダウンのvalue
        value: ''
    };

    this.onNameChange = this.onNameChange.bind(this);
}


  onNameChange(e) {
    const value = document.getElementById("SelectName").value;
      console.log("you are" + value);


    this.setState({value: e.target.value});
  }



  render() {
    return (
        <div className="UserInfo">
          <div>
            {this.state.value}
          </div>
            <div>
              <select
                className= "SelectName"
                id= "SelectName"
                onChange= {this.onNameChange}
                >
                <option value="yuki">yuki</option>
                <option value="satoko">satoko</option>
                <option value="juma">juma</option>
                <option value="moe">moe</option>
              </select>
            </div>
        </div>
    )
  }
}
