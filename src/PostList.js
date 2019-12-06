import React from 'react';
import PostItem from './PostItem';
import styles from './style.css';


export class PostList extends React.Component {
  render() {
    // posts 内の各articleをPostItemコンポーネントを使ってエレメントにしている
    // list変数にはPostItemエレメントの配列が入っている
    const list = this.props.posts.map(article => {
      return <PostItem {...article} key={article.id} />;
    });
    return (
      <div>
        <ul className= "PostList">
          {list}
        </ul>
      </div>
    );
  }
}
