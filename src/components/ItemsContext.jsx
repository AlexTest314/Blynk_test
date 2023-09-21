import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext({});

const ItemsContextProvider = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  console.log("items", items);

  useEffect(() => {
    if (ls && ls.getItem("items")) {
      setItems(JSON.parse(ls.getItem("items")));
    }
    if (ls && ls.getItem("activeItem")) {
      setActiveItem(JSON.parse(ls.getItem("activeItem")));
    }
  }, []);

  useEffect(() => {
    if (items?.length) {
      ls?.setItem("items", JSON.stringify(items));
      ls?.setItem("activeItem", JSON.stringify(activeItem));
    }

    if (items?.comments?.length) {
      ls?.setItem("items", JSON.stringify(items));
    }
  }, [items, activeItem]);

  const addItem = (newItem) => {
    if (items.length === 0) {
      setActiveItem(newItem);
    }
    setItems((prev) => [...prev, newItem]);
    ls?.setItem("items", JSON.stringify(items));
    ls?.setItem("activeItem", JSON.stringify(activeItem));
  };

  const removeItem = (id) => {
    setItems((prev) => {
      const newArray = prev.filter((value) => value.id !== id);
      if (newArray.length === 0) {
        ls?.setItem("items", JSON.stringify(newArray));
        ls?.setItem("activeItem", JSON.stringify(null));
      } else {
        setActiveItem(newArray[newArray.length - 1]);
      }

      return newArray;
    });
  };

  const addComment = (id, comment, color) => {
    setItems((prev) => {
      const newArray = [...prev];
      const idx = prev.map((item) => item.id).indexOf(id);
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

  return <ItemsContext.Provider value={{ addItem, items, removeItem, activeItem, setActiveItem, addComment }}>{children}</ItemsContext.Provider>;
};

export default ItemsContextProvider;
