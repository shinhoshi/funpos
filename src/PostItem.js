import React from 'react';
import styles from './style.css';


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
          <div className="ApplauseNumber">
              {props.applauseCount}
          </div>
          <div className="PostDate">
            {props.date}
          </div>
        </div>
      </li>
    </div>
  );
}

export default PostItem;
