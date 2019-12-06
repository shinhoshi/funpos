import React from 'react';

export class PostInput extends React.Component {
  render() {
    return (
        <div>
          <form>
            <input
              type="text"
              placeholder='あなたの仲間の素敵な行動を褒めようぜ！'
            />
            <input
              type="submit"
              value="投稿"
            />
          </form>
        </div>
    );
  }
}
