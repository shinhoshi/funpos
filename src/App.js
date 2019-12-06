import React, { Component } from 'react';
import { CurrentUser } from './CurrentUser';
import { UserInfo } from './UserInfo';
import { PostInput } from './PostInput';
import { PostList } from './PostList';
import logo from './logo.svg';
import styles from './style.css';

// どんなPostが投稿されているかはアプリケーション全体に関わるのでデータの管理はここで行う

 class App extends Component {
  render() {
    // POST: あとでstateで管理する
    const posts = [
      { text: 'aaa', id: 0 },
      { text: 'bbb', id: 1 },
    ];
    // 以下見た目の部分
    return (
      <div>
        <CurrentUser />
        <div className= "AddPost" >
          <UserInfo />
          <PostInput />
        </div>
        <div>
          <PostList posts={posts} />
        </div>
      </div>
    );
  }
}


export default App;
