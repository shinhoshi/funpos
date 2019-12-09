import React, { Component } from 'react';
import { CurrentUser } from './CurrentUser';
import { UserInfo } from './UserInfo';
import { PostInput } from './PostInput';
import { PostList } from './PostList';
import {ApplauseZone} from './ApplauseZone';
import styles from './style.css';


// 各投稿に対してユニークなIDを生成
function getUniqueId() {
  return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
}

// 投稿した時間を取得
function getNowTime() {
  const now = new Date;
  const setMonth = now.getMonth() + 1;
  return(
    now.getFullYear() + "/" +  setMonth + "/"+ now.getDate() + " " + now.getHours()  + ":" + now.getMinutes() + ":" + now.getSeconds());
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
            heroIcon: <img src= "moe.jpeg" alt="moe"  className="imageAlign"/>,
            applauseCount: <ApplauseZone />,
            date: "2019/12/02 13:51"
          },
        ],
        item: '',
        uniqueId: getUniqueId(),
        date: getNowTime(),
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
        applauseCount,
        date,
      } = this.state;

      const post = {
        text,
        id: getUniqueId(),
        praiserIcon: <img src= "satoko.png" alt="satoko" className="imageAlign"/>,
        heroIcon: <img src= "juma.png" alt="juma" className="imageAlign"/>,
        applauseCount: <ApplauseZone />,
        date: getNowTime(),
      };

      const newPosts = posts.concat(post)
      this.setState({
        posts: newPosts,
      });
    }





    //投稿された後にlocalStorageに保存
    componentDidUpdate() {
      localStorage.setItem('posts', JSON.stringify(this.state.posts));
    }



    //componentがマウントされる時にlocalstorageから読みこむ
    //未完成
    // componentDidMount() {
    //   this.setState({
    //     post: JSON.parse(localStorage.getItem('posts'))
    //   });
    // }

    // componentDidMount() {
    //   console.log(
    //   JSON.parse(localStorage.getItem('posts'))
    //   );
    // }




    // 以下見た目の部分
  render() {
    return (
      <div>
        <CurrentUser />
        <div className= "AddPost" >
          <div>
            <UserInfo  />
          </div>
          <div>
            <PostInput
              addPost={this.addPost}
            />
          </div>
        </div>
        <div>
          <PostList
            posts={this.state.posts}
            // componentDidMount={this.componentDidMount}
          />
          {this.state.componentDidMount}
        </div>
      </div>
    );
  };
}


export default App;
