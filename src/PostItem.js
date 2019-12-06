import React from 'react';
import styles from './style.css';

function PostItem(props) {
  return (
    <div className="background">
      <li>
        <div>
          {props.praiserIcon}
          {props.arrow}
          {props.heroIcon}
        </div>
        <h2>
          {props.text}
        </h2>
        <div className="wrapper">
          <div>
            {props.applause}
            {props.applauseNumber}
          </div>
          <div>
            {props.date}
          </div>
        </div>
      </li>
    </div>
  );
}

export default PostItem;
