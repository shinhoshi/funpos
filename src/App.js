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


class PraiserSelect extends Component {
  constructor(props) {
    super(props);
      this.state = {
        value: '',
      };
      this.handlePraiserChange = this.handlePraiserChange.bind(this);
}

  // プルダウンのユーザーのvalueを親コンポーネントに伝える
  handlePraiserChange(e){
    console.log(e.target.value);
    const ePraiserTargetValue = e.target.value;
    this.props.handlePraiserIcon(ePraiserTargetValue);
  }

  render(props) {
    return (
      <div className='CurrentUser'>
        { this.props.praiserIcon }
        <select
          className='SelectName'
          onChange={this.handlePraiserChange}
        >
          { this.props.userinfo.map(userinfo => <option value={userinfo.value}>{userinfo.name}</option>)}
        </select>
        <div>
          拍手できる : { this.props.canApplausing }
        </div>
        <div>
          拍手された : { this.props.beApplaused }
        </div>
      </div>
    );
  }
}

// 褒めたい人を選ぶ
class HeroSelect extends Component {
  constructor(props) {
    super(props);
      this.state = {
        value: '',
      };
      this.handleHeroChange = this.handleHeroChange.bind(this);
}

  handleHeroChange(e){
    console.log(e.target.value);
    const eHeroTargetvalue = e.target.value;
    this.props.handleHeroIcon(eHeroTargetvalue);
  }

  render(props) {
    return (
      <div className>
        { this.props.heroIcon }
        <select
          className='SelectName'
          onChange={this.handleHeroChange}
        >
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
          <ApplauseZone
            praiserIcon={props.praiserIcon}
            heroIcon={props.heroIcon}
          />
          <div className='ApplauseNumber'>
          </div>
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


// 拍手機能
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

  // クリックした時の挙動
  onAppluaseIconClick() {
    // ここでは投稿内容のpraiser,hero
    console.log(this.props.praiserIcon)
    console.log(this.props.heroIcon)

    const postPraiserIcon = toString(this.props.praiserIcon)
    console.log(postPraiserIcon)


    // if ( this.props.praiserIcon = this.props.heroIcon ) {
    //   return;
    // }


    // クリックするとポイントが変動するよ
    this.setState((prevState, props) => {
      return { applauseCount: prevState.applauseCount + 1,
               canApplause: prevState.canApplause - 2,
               beApplaused: prevState.beApplaused + 1, }
     });
     console.log(this.state.applauseCount);
     console.log(this.state.canApplause);
     console.log(this.state.beApplaused);
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
          applauseCount: 0,
          date: getNowTime(),
        },
      ],
      userinfo: [
        { value: 1, name: "yuki", userIcon: <img src="yuki.png"/>, canApplause: 100, beApplaused: 0 },
        { value: 2, name: "satoko", userIcon:<img src= "satoko.png"/>, canApplause: 70, beApplaused: 8 },
        { value: 3, name: "juma", userIcon:<img src= "juma.png"/>, canApplause: 90, beApplaused: 8 },
        { value: 4, name: "moe", userIcon:<img src= "moe.png"/>, canApplause: 90, beApplaused: 8 },
      ],
      praiserIcon: <img src="yuki.png"/>,
      heroIcon: <img src='yuki.png' />,
      canApplausing: 100,
      beApplaused: 0,
    };
    this.addPost = this.addPost.bind(this);
    this.handlePraiserIcon = this.handlePraiserIcon.bind(this);
    this.handleHeroIcon = this.handleHeroIcon.bind(this);
  }


  // userinfo を先にlocalStorageにいれる
  componentWillMount() {
    localStorage.setItem('userinfo', JSON.stringify(this.state.userinfo));
    const newUserinfo = JSON.parse(localStorage.getItem('userinfo'));
    console.log(newUserinfo)

    // userinfoの書き換え
    // this.setState({
    //   userinfo: newUserinfo
    // });
    // console.log(this.state.userinfo)
     // localStorage.clear();

    const getPostInfo = JSON.parse(localStorage.getItem('posts'));
    console.log(getPostInfo);

    this.setState({
      post: getPostInfo || []
    })

  }



  // localStorageに投げる
  componentDidUpdate() {
    localStorage.setItem('posts', JSON.stringify(this.state.posts));
    localStorage.setItem('userInfo', JSON.stringify(this.state.userinfo));
  }
  // //
  // componentDidMount() {
  //   this.setState({
  //     posts: JSON.parse(localStorage.getItem('posts')) || []
  //   });
  //   console.log(JSON.parse(localStorage.getItem('posts')));
  // }

  // ポイントをまとめて計算するよ
  // calculationPoints(ePraiserTargetValue) {
  //   const findInfo = this.state.userinfo.find((v) => v.value == ePraiserTargetValue );
  //   console.log(findInfo);
  //   this.setState({
  //     canApplausing: findInfo['canApplause'] - 2,
  //     beApplaused: findInfo['beApplaused']});
  //   console.log(this.state.canApplausing);
  //   // this.setState({
  //   //   findInfo['canApplause']:  findInfo['canApplause'] - 2,
  //   //
  //   // });
  //
  // }



  // 現在ユーザーのアイコンを変える
  handlePraiserIcon(ePraiserTargetValue) {
    console.log(ePraiserTargetValue);
    // e.target.value と同じvalueを持つユーザーの配列を取得
    const findInfo = this.state.userinfo.find((v) => v.value == ePraiserTargetValue );
    console.log(findInfo);
    console.log(findInfo['userIcon']);
    this.setState({
      praiserIcon: findInfo['userIcon'],
      canApplausing: findInfo['canApplause'],
      beApplaused: findInfo['beApplaused']
    });
  };




  // 褒めたいユーザーのアイコンを変える
  handleHeroIcon(eHeroTargetValue) {
    console.log(eHeroTargetValue);
    // e.target.value と同じvalueを持つユーザーの配列を取得
    const findInfo = this.state.userinfo.find((v) => v.value == eHeroTargetValue );
    console.log(findInfo);
    console.log(findInfo['userIcon']);
    this.setState({
      heroIcon: findInfo['userIcon']});
  };



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
     praiserIcon: this.state.praiserIcon,
     heroIcon: this.state.heroIcon,
     applauseCount: 0,
     date: getNowTime(),
   };

   const newPosts = posts.concat(post)
   this.setState({
     posts: newPosts,
   });
 }



  render() {
    return(
      <div>
        <div>
          <PraiserSelect
            userinfo={this.state.userinfo}
            componentWillMount={this.componentWillMount}
            handlePraiserIcon={this.handlePraiserIcon}
            praiserIcon={this.state.praiserIcon}
            canApplausing={this.state.canApplausing}
            beApplaused={this.state.beApplaused}
          />
        </div>
        <div>
          <HeroSelect
            userinfo={this.state.userinfo}
            heroIcon={this.state.heroIcon}
            handleHeroIcon={this.handleHeroIcon}
          />
          <PostInput
            addPost={this.addPost}
            praiserIcon={this.state.praiserIcon}
            heroIcon={this.state.heroIcon}
          />
          <PostList
            posts={this.state.posts}

          />
        </div>
      </div>
    );
  }
}



export default App;
