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
          拍手された : { this.props.beApplausing }
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

class PostItem extends Component{
  render(props) {
    const posts = this.props
    return (
      <div className="PostItem">
        <li>
          <div>
            {this.props.praiserIcon}
            <img
              src= "yazirushi.png"
              alt="yazirushi"
              className="imageAlign"
            />
            {this.props.heroIcon}
          </div>
          <div className="PostItemText">
            <h1>
              {this.props.text}
            </h1>
          </div>
          <div className="PostItemFooter">
            <ApplauseZone
              praiserIcon={this.props.praiserIcon}
              heroIcon={this.props.heroIcon}
              onClickHakushu={this.props.onClickHakushu}
            />
            <div className='ApplauseNumber'>
            </div>
            <div className="PostDate">
              {this.props.date}
            </div>
          </div>
        </li>
      </div>
    );
  }
}


class PostList extends Component {

  render(props) {
    const posts = this.props.posts.map(post => {
      return (
        <PostItem
          key={post.id}
          {...post}
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


// 拍手機能
export class ApplauseZone extends React.Component {

  constructor(props) {
    super(props);
     this.state = {
        applauseCount: 0,

      };
     this.onAppluaseIconClick = this.onAppluaseIconClick.bind(this);
    }

  // クリックした時の挙動
  onAppluaseIconClick() {
    // ここでは投稿内容のpraiser,hero
    console.log(this.props.praiserIcon)
    console.log(this.props.heroIcon)

    // クリックするとポイントが変動するよ
    this.setState((prevState, props) => {
      return { applauseCount: prevState.applauseCount + 1, }
     });

     // App コンポーネントのonClickHakuhuを動かす
     return this.props.onClickHakushu();

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
          {this.state.applauseCount}
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
          praiserIcon: <img src= "yuki.png"/>,
          heroIcon: <img src= "moe.png"/>,
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
      beApplausing: 0,
    };
    this.addPost = this.addPost.bind(this);
    this.handlePraiserIcon = this.handlePraiserIcon.bind(this);
    this.handleHeroIcon = this.handleHeroIcon.bind(this);
    this.onClickHakushu = this.onClickHakushu.bind(this);
  }








  // localStorageに投げる
  componentDidUpdate() {
    localStorage.setItem('posts', JSON.stringify(this.state.posts));
    localStorage.setItem('userInfo', JSON.stringify(this.state.userinfo));
  }

  // userinfo を先にlocalStorageにいれる
  componentWillMount() {

    const getPostInfo = JSON.parse(localStorage.getItem('posts'));
    console.log(getPostInfo);

  }

  //
  componentDidMount() {
    // this.setState({
    //   posts: JSON.parse(localStorage.getItem('posts')) || []
    // });
    const getPostInfo = JSON.parse(localStorage.getItem('posts'));
    console.log(getPostInfo);
    console.log(getPostInfo[0]);
    console.log(this.state.posts)

  }




  // 現在ユーザーのアイコンを変える
  handlePraiserIcon(ePraiserTargetValue) {
    console.log(ePraiserTargetValue);
    // e.target.value と同じvalueを持つユーザーの配列を取得
    const findInfo = this.state.userinfo.find((v) => v.value == ePraiserTargetValue );
    console.log(findInfo['value']);

    this.setState({
      praiserIcon: findInfo['userIcon'],
      canApplausing: findInfo['canApplause'],
      beApplausing: findInfo['beApplaused'],
    });
  };


  // 褒めたいユーザーのアイコンを変える
  handleHeroIcon(eHeroTargetValue) {
    console.log(eHeroTargetValue);
    // e.target.value と同じvalueを持つユーザーの配列を取得
    const findInfo = this.state.userinfo.find((v) => v.value == eHeroTargetValue );
    console.log(findInfo['value']);
    this.setState({
      heroIcon: findInfo['userIcon'],
    });

  };

  onClickHakushu() {
    // 投稿した人された人はストップしたい
    console.log(this.state.pvalue);
    console.log(this.state.hvalue);
    // if (this.state.pvalue == this.state.hvalue) {
    //   return;
    // }

    // 拍手できるポイントが減る
    this.setState((prevState, props) => {
      return { canApplausing: prevState.canApplausing - 2, }
     });
     // 拍手されたポイントが増える
     this.setState((prevState, props) => {
       return { beApplausing: prevState.beApplausing + 1, }
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
     id: getUniqueId(),
     praiserIcon: this.state.praiserIcon,
     heroIcon: this.state.heroIcon,
     applauseCount: this.state.applauseCount,
     date: getNowTime(),
   };

   const newPosts = posts.concat(post)
   const newPost = newPosts.reverse();
   this.setState({
     posts: newPost,
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
            beApplausing={this.state.beApplausing}
          />
        </div>
        <div>
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
          </div>
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
