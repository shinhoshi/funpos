import React, { Component } from 'react';
import styles from './style.css';

export class PostInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleClick() {
    const inputValue = this.state.inputValue;
    this.props.addPost(inputValue);
  }

  render() {
    return (
        <div>
          <form>
            <textarea
              type="text"
              placeholder='あなたの仲間の素敵な行動を褒めようぜ！'
              className="Postform"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="投稿"
              className="PostButton"
              onClick={this.handleClick}
            />
          </form>
        </div>
    );
  }
}
