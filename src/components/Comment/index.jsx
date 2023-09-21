import React from "react";
import "./index.css";

import "./index.css";
const Comment = ({ comment }) => {
  return (
    <div className='comment-card'>
      <div className='card'>
        <div
          className='card-color'
          style={{ background: `${comment?.color}` }}></div>
        <div className='card-body'>
          <pre className='card-text'>{comment?.body}</pre>
        </div>
      </div>
    </div>
  );
};

export default Comment;
