import React, { Component } from 'react';
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


class CurrentUserSelect extends Component {
  constructor(props) {
    super(props);
      this.state = {
        value: '',
        currentUserIcon: <img src="yuki.png"/>,
        canApplause: 100,
        beApplaused: 0,
      };
      this.handleImage = this.handleImage.bind(this);
}

  // ユーザーidからアイコン,拍手できるポイント,されたポイントを表示する
  handleImage(e) {
    console.log(e.target.value);
    // e.target.value と同じvalueを持つユーザーの配列を取得
    const findInfo = this.props.userinfo.find((v) => v.value == e.target.value );
    console.log(findInfo);
    console.log(findInfo['userIcon']);
    this.setState({
      currentUserIcon: findInfo['userIcon'],
      canApplause: findInfo['canApplause'],
      beApplaused: findInfo['beApplaused']});
  };

  render(props) {
    return (
      <div className='CurrentUser'>
        {this.state.currentUserIcon}
        <select
          className='SelectName'
          onChange={this.handleImage}
          >
          { this.props.userinfo.map(userinfo => <option value={userinfo.value}>{userinfo.name}</option>)}
        </select>
        <div>
          拍手できる : { this.state.canApplause }
        </div>
        <div>
          拍手された : { this.state.beApplaused }
        </div>
      </div>
    );
  }
}

class ApplausedUserSelect extends Component {
  constructor(props) {
    super(props);
      this.state = {
        value: '',
        applausedUserIcon: <img src="yuki.png"/>,
      };
      this.handleImage = this.handleImage.bind(this);
}

  // ユーザーidからアイコンを表示する
  handleImage(e) {
    console.log(e.target.value);
    // e.target.value と同じvalueを持つユーザーの配列を取得
    const findInfo = this.props.userinfo.find((v) => v.value == e.target.value );
    console.log(findInfo);
    console.log(findInfo['userIcon']);
    this.setState({
      applausedUserIcon: findInfo['userIcon']});
  };


  render(props) {
    return (
      <div className>
        {this.state.applausedUserIcon}
        <select
          className='SelectName'
          onChange={this.handleImage}>
          { this.props.userinfo.map(userinfo => <option value={userinfo.value}>{userinfo.name}</option>)}
        </select>
      </div>
    );
  }
}

function PostItem(props) {
  return (
    <div className="PostItem">
      <li>
        <div>
          {props.praiserIcon}
          <img
            src= "yazirushi.png"
            alt="yazirushi"
            className="imageAlign"
          />
          {props.heroIcon}
        </div>
        <div className="PostItemText">
          <h1>
            {props.text}
          </h1>
        </div>
        <div className="PostItemFooter">
          <ApplauseZone />
          <div className="PostDate">
            {props.date}
          </div>
        </div>
      </li>
    </div>
  );
}

class PostList extends Component {
  render(props) {
    const posts = this.props.posts.map(post => {
      return (
        <PostItem
          key={post.id}
          text={post.text}
          praiserIcon={post.praiserIcon}
          heroIcon={post.heroIcon}
          applauseCount={post.applauseCount}
          date={post.date}
          onClickHakushu={this.props.onClickHakushu}
        />
      );
    });
    return (
      <div>
        <ul className='PostList'>
          {posts}
        </ul>
      </div>
    );
  }
}

export class PostInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // フォームに何か文字が入力されたらその文字を反映する
  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  // クリックされたらaddPostしてあげる
  handleClick(e) {
    e.preventDefault();
    //5文字以下の投稿できない．
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


// 拍手数
export class ApplauseZone extends React.Component {

  constructor(props) {
    super(props);
     this.state = {
        applauseCount: 0,
        canApplause: 100,
        beApplaused: 0
      };
     this.onAppluaseIconClick = this.onAppluaseIconClick.bind(this);
    }

  onAppluaseIconClick() {
    this.setState((prevState, props) => {
      return { applauseCount: prevState.applauseCount + 1,
               canApplause: prevState.canApplause - 2}
     });
   };

  shouldComponentUpdate(nextProps, nextState){
   return true;
 }

  render() {
    return (
      <div>
        <div>
          <img
            src="hakushu.jpg"
            alt="hakushu"
            className="imageAppluase"
            onClick={this.onAppluaseIconClick}
          />
        </div>
        <div className="ApplauseNumber">
          {this.state.applauseCount}
        </div>
        <div className='AppluseList'>
          aaa
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { text: 'aaa',
          id: getUniqueId() ,
          praiserIcon: <img src= "yuki.png" alt="yuki"  className="imageAlign"/>,
          heroIcon: <img src= "moe.png" alt="moe"  className="imageAlign"/>,
          applauseCount: 4,
          date: getNowTime(),
        },
      ],
      userinfo: [
        { value: 1, name: "yuki", userIcon: <img src="yuki.png"/>, canApplause: 100, beApplaused: 0 },
        { value: 2, name: "satoko", userIcon:<img src= "satoko.png"/>, canApplause: 70, beApplaused: 8 },
      ],
    };
    this.onClickHakushu = this.onClickHakushu.bind(this);
    this.addPost = this.addPost.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

  }


  // userinfo を先にlocalStorageにいれる
  componentWillMount() {
    localStorage.setItem('userinfo', JSON.stringify(this.state.userinfo));
    const newUserinfo = JSON.parse(localStorage.getItem('userinfo'));
    console.log(newUserinfo)

    // userinfoの書き換え
    this.setState({
      userinfo: newUserinfo
    });
    console.log(this.state.userinfo)
     // localStorage.clear();

    const getPostInfo = JSON.parse(localStorage.getItem('post'));
    console.log(getPostInfo);

  }



  // localStorageに投げる
  componentDidUpdate() {
    localStorage.setItem('posts', JSON.stringify(this.state.posts));
    localStorage.setItem('userInfo', JSON.stringify(this.state.userinfo));
  }

  componentDidMount() {
    // this.setState({
    //   posts: JSON.parse(localStorage.getItem('posts')) || []
    // });
    console.log(JSON.parse(localStorage.getItem('posts')));
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
     praiserIcon: <img src="yuki.png"/>,
     heroIcon: <img src= "satoko.png"/>,
     applauseCount: 0,
     date: getNowTime(),
   };

   const newPosts = posts.concat(post)
   this.setState({
     posts: newPosts,
   });
 }

  // 拍手ボタンをクリックした時に1増える
  onClickHakushu(post) {
    this.setState((prevState, props) => {
      return { applauseCount: prevState.applauseCount + 1}
     });
  }

  shouldComponentUpdate(nextProps, nextState){
   return true;
 }

  render() {
    return(
      <div>
        <div>
          <CurrentUserSelect
          userinfo={this.state.userinfo}
          componentWillMount={this.componentWillMount}/>
        </div>
        <div>
          <ApplausedUserSelect userinfo={this.state.userinfo}/>
          <PostInput
            addPost={this.addPost}
          />
          <PostList
            posts={this.state.posts}
            onClickHakushu={this.onClickHakushu}
          />
        </div>
      </div>
    );
  }
}



export default App;
