import React, { Component } from 'react';

export class PostInput extends React.Component {
  render() {
    return (
        <div>
          <form>
            <textarea
              type="text"
              placeholder='あなたの仲間の素敵な行動を褒めようぜ！'
              className="Postform"
            />
            <input
              type="submit"
              value="投稿"
              className="PostButton"
            />
          </form>
        </div>
    );
  }
}
