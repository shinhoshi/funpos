import React, { Component } from 'react';
import { CurrentUser } from './CurrentUser';
import { UserInfo } from './UserInfo';
import { PostInput } from './PostInput';
import { PostList } from './PostList';
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
        posts : [],
        item: '',
        uniqueId: getUniqueId(),
        applauseCount: 0,
        date: getNowTime(),


        // userIconData: null,
      };
      this.addPost = this.addPost.bind(this);
      this.componentDidUpdate = this.componentDidUpdate.bind(this);
      // this.componentDidMount = this.componentDidMount.bind(this);
      this.applauseCountUp = this.applauseCountUp.bind(this);

    }

    // 拍手数カウント
    applauseCountUp() {
      this.setState(prevState => {
        return {
          applauseCount: prevState.applauseCount + 1
        };
      });
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
        id: uniqueId,
        praiserIcon: <img src= "satoko.png" alt="satoko" className="imageAlign"/>,
        heroIcon: <img src= "juma.png" alt="juma" className="imageAlign"/>,
        // applauseCount: applauseCountUp(),
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
    componentDidMount() {
      this.setState({
        post: 'aaa',
        id: 'aaaaaaaaaa',
        praiserIcon: <img src= "satoko.png" alt="satoko" className="imageAlign"/>,
        heroIcon: <img src= "juma.png" alt="juma" className="imageAlign"/>,
      });
    }




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
            componentidMount={this.componentDidMount}
            applauseCountUp={this.applauseCountUp}
          />
        </div>
      </div>
    );
  };
}


export default App;
