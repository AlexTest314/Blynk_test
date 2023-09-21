import React, { useContext } from "react";
import { ItemsContext } from "./ItemsContext";

export const Item = ({ item }) => {
  const { removeItem, activeItem, setActiveItem } = useContext(ItemsContext);

  const deleteItem = (e) => {
    e.stopPropagation();
    removeItem(item?.id);
  };

  const handleActive = (item) => setActiveItem(item);

  const isActive = activeItem?.id === item?.id ? "active-item" : ""

  return (
    <li
      className={`items-list-item ${isActive}`}
      onClick={() => handleActive(item)}>
      {item?.name}
      <span className='item-comment-quatity'>{item.comments.length}</span>
      <button
        type='button'
        className='btn-delete'
        onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
};
