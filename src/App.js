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
      {
        text: 'aaa',
        id: 0 ,
        praiserIcon: <img src= "yuki.png" alt="yuki"  className="imageAlign"/>,
        arrow: <img src= "yazirushi.png" alt="yazirushi" className="imageAlign"/>,
        heroIcon: <img src= "moe.jpeg" alt="moe"  className="imageAlign"/>,
        applauseNumber: 2,
        date: "2019/12/02 13:51"
      },
      {
        text: 'bbb',
        id: 1 ,
        praiserIcon: <img src= "satoko.png" alt="satoko" className="imageAlign"/>,
        arrow: <img src= "yazirushi.png" alt="yazirushi" className="imageAlign"/>,
        heroIcon: <img src= "juma.png" alt="juma" className="imageAlign"/>,
        applauseNumber: 4,
        date: "2019/12/02"
      },
    ];
    // 以下見た目の部分
    return (
      <div>
        <CurrentUser />
        <div className= "AddPost" >
          <div>
            <UserInfo />
          </div>
          <div>
            <PostInput />
          </div>
        </div>
        <div>
          <PostList posts={posts} />
        </div>
      </div>
    );
  }
}


export default App;
