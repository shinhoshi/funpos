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



  handleClick(e) {
    e.preventDefault();

    // console.log(this.state.inputValue.length);

    //空文字投稿できない
    // if (this.state.inputValue.trim() === '') {
    //   return;
    // }


    if (this.state.inputValue.length <= 5) {
      return;
    }

    const inputValue = this.state.inputValue;
    this.props.addPost(inputValue);

    //formの中身を消してあげる
    this.setState({
      inputValue: '',
    });
  }





  render() {
    return (
        <div>
          <form>
            <textarea
              type="text"
              placeholder='あなたの仲間の素敵な行動を褒めようぜ！'
              className="Postform"
              onChange={this.handleChange}
              value={this.state.inputValue}
              //onChangeしてからvalue
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
