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
          // {
          //   text: 'aaa',
          //   id: 0 ,
          //   praiserIcon: <img src= "yuki.png" alt="yuki"  className="imageAlign"/>,
          //   heroIcon: <img src= "moe.jpeg" alt="moe"  className="imageAlign"/>,
          //   applauseNumber: 2,
          //   date: "2019/12/02 13:51"
          // },
          // {
          //   text: 'bbb',
          //   id: 1 ,
          //   praiserIcon: <img src= "satoko.png" alt="satoko" className="imageAlign"/>,
          //   heroIcon: <img src= "juma.png" alt="juma" className="imageAlign"/>,
          //   applauseNumber: 4,
          //   date: "2019/12/02"
          // },
        ],
        item: '',
        uniqueId: getUniqueId(),
      };
      this.addPost = this.addPost.bind(this);
      this.componentDidUpdate = this.componentDidUpdate.bind(this);
      // this.componentDidMount = this.componentDidMount.bind(this);
    }

    // 実際に投稿するところ
    addPost(text) {
      const {
        posts,
        uniqueId,
        praiserIcon,
        heroIcon,
        applauseNumber,
        date,
      } = this.state;

      posts.unshift({
        text,
        id: uniqueId,
        praiserIcon: <img src= "satoko.png" alt="satoko" className="imageAlign"/>,
        heroIcon: <img src= "juma.png" alt="juma" className="imageAlign"/>,
        applauseNumber: 4,
        date: "2019/12/02"
      });

      this.setState({
        posts: posts,
        uniqueId:  getUniqueId(),
        praiserIcon: <img src= "satoko.png" alt="satoko" className="imageAlign"/>,
        heroIcon: <img src= "juma.png" alt="juma" className="imageAlign"/>,
        applauseNumber: 4,
        date: "2019/12/02"
      });
    }



    //投稿された後にlocalStorageに保存
    componentDidUpdate() {
      localStorage.setItem('posts', JSON.stringify(this.state));
    }

    //componentがマウントされる時にlocalstorageから読みこむ
    //未完成
    // componentDidMount() {
    //   this.setState({
    //     posts: JSON.parse(localStorage.getItem('posts'))
    //   });
    // }



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
          <PostList
            posts={this.state.posts}
            componentDidMount={this.componentDidMount}
          />
        </div>
      </div>
    );
  }
}


export default App;
