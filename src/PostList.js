import React, { Component } from 'react';
import PostItem from './PostItem';

import styles from './style.css';


export class PostList extends React.Component {
  constructor(){
    super();
    this.state = {
      posts : [
      ],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  };

  componentDidMount() {
    const post1 = {
      text:"aaa",
      id: 'aaaaaa',
      praiserIcon: <img src= "satoko.png" alt="satoko" className="imageAlign"/>,
      heroIcon: <img src= "juma.png" alt="juma" className="imageAlign"/>,
      applauseCount: 18,
      date: 'aa',
    };
    this.setState({
      posts : post1,

    });
  }

  render() {
    // posts 内の各postをPostItemコンポーネントを使ってエレメントにしている
    // list変数にはPostItemエレメントの配列が入っている
    const posts = this.props.posts.map(post => {
      return (
      <PostItem
        {...post}
        key={post.id}

      />);
    });
    return (
      <div>
        <ul
        className= "PostList"

        >
          {posts.length ? posts : <li>投稿がまだありません．</li>}

        </ul>
      </div>
    );
  }
}
