import React, { Component } from 'react';
import { CurrentUser } from './CurrentUser';
import { UserInfo } from './UserInfo';
import { PostInput } from './PostInput';
import { PostList } from './PostList';
import logo from './logo.svg';
import styles from './style.css';

function getUniqueId() {
  return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
}

// どんなPostが投稿されているかはアプリケーション全体に関わるのでデータの管理はここで行う

 class App extends Component {
   constructor(props) {
     super(props);
      this.state = {
        posts : [
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
        ],
        uniqueId: getUniqueId(),
      };

      this.addPost = this.addPost.bind(this);
    }


    addPost(text) {
      const {
        posts,
        uniqueId,
        // praiserIcon,
        // arrow,
        // heroIcon,
        // applauseNumber,
        // date,
      } = this.state;

      posts.unshift({
        text,
        id: uniqueId,
        praiserIcon: <img src= "satoko.png" alt="satoko" className="imageAlign"/>,
        arrow: <img src= "yazirushi.png" alt="yazirushi" className="imageAlign"/>,
        heroIcon: <img src= "juma.png" alt="juma" className="imageAlign"/>,
        applauseNumber: 4,
        date: "2019/12/02"
      });

      this.setState({
        posts,
        uniqueId:  getUniqueId(),
        // praiserIcon: <img src= "satoko.png" alt="satoko" className="imageAlign"/>,
        // arrow: <img src= "yazirushi.png" alt="yazirushi" className="imageAlign"/>,
        // heroIcon: <img src= "juma.png" alt="juma" className="imageAlign"/>,
        // applauseNumber: 4,
        // date: "2019/12/02"
      });
    }

    // 以下見た目の部分
  render() {
    return (
      <div>
        <CurrentUser />
        <div className= "AddPost" >
          <div>
            <UserInfo />
          </div>
          <div>
            <PostInput addPost={this.addPost} />
          </div>
        </div>
        <div>
          <PostList posts={this.state.posts} />
        </div>
      </div>
    );
  }
}


export default App;
