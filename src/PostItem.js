import React from 'react';
import styles from './style.css';


function PostItem(props) {
  return (
    <div className="PostItem">
      <li>
        <div>
          {props.praiserIcon}
          {props.arrow}
          {props.heroIcon}
        </div>
        <div className="PostItemText">
          <h1>
            {props.text}
          </h1>
        </div>
        <div className="PostItemFooter">
          <div>
            <img
              src="hakushu.jpg"
              alt="hakushu"
              className="imageAppluase"
            />
          </div>
          <div className="ApplauseNumber">
              {props.applauseNumber}
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
