import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext({});

const ItemsContextProvider = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  const [items, setItems] = useState(JSON.parse(ls.getItem("items")) || []);
  const [activeItem, setActiveItem] = useState(JSON.parse(ls.getItem("activeItem")) || null);

  useEffect(() => {
    ls?.setItem("items", JSON.stringify(items));
    ls?.setItem("activeItem", JSON.stringify(activeItem));

    if (items?.comments?.length) {
      ls?.setItem("items", JSON.stringify(items));
    }
  }, [items, activeItem]);

  const addItem = (newItem) => {
    if (items.length === 0) {
      setActiveItem(newItem);
    }
    setItems((prev) => [...prev, newItem]);
  };

  const removeItem = (id) => {
    setItems((prev) => {
      const newArray = prev.filter((value) => value.id !== id);
      if (newArray.length === 0) {
        setItems(newArray);
        setActiveItem(null);
      } else {
        setActiveItem(newArray[newArray.length - 1]);
      }

      return newArray;
    });
  };

  const addComment = (id, comment, color) => {
    setItems((prev) => {
      const newArray = [...prev];
      const idx = prev.findIndex((item) => item.id === id);
      const commentIdx = prev[idx].comments.length;
      const newComment = {
        id: `${id}-${commentIdx}`,
        body: comment,
        color: color
      };
      newArray[idx].comments.push(newComment);
      return newArray;
    });
  };

  return (
    <ItemsContext.Provider
      value={{
        addItem,
        items,
        removeItem,
        activeItem,
        setActiveItem,
        addComment
      }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
