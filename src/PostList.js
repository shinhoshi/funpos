import React, { Component } from 'react';
import PostItem from './PostItem';

import styles from './style.css';


export class PostList extends React.Component {

  render() {
    // posts 内の各postをPostItemコンポーネントを使ってエレメントにしている
    // list変数にはPostItemエレメントの配列が入っている
    const list = this.props.posts.map(post => {
      return <PostItem {...post} key={post.id} />;
    });
    return (
      <div>
        <ul
        className= "PostList"

        >
          {list.length ? list : <li>投稿がまだありません．</li>}

        </ul>
      </div>
    );
  }
}
