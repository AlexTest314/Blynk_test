import React, { useContext, useState } from "react";
import { ItemsContext } from "../ItemsContext";
import Comment from "../Comment";
import "./index.css";

const Comments = () => {
  const { activeItem, addComment } = useContext(ItemsContext);
  
  const [comment, setComment] = useState("");
  const [color, setColor] = useState("#000000");

  const comments = activeItem?.comments;

  const addNewComment = (e) => {
    e.preventDefault();

    addComment(activeItem.id, comment, color);
    setComment("");
    setColor("#000000");
  };

  return (
    <div>
      <div className='comments-card'>
        <h1>Comments #{activeItem?.id}</h1>
        {comments?.length > 0 &&
          comments?.map((comment) => (
            <Comment
              comment={comment}
              key={comment.id}
            />
          ))}
        <form onSubmit={addNewComment}>
          <input
            type='color'
            className='form-input'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <textarea
            className='form-input'
            placeholder='Type comment here...'
            required
            spellCheck={false}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className='btn-new-comment'>Add New</button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
