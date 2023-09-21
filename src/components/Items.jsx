import React, { useContext, useEffect } from "react";
import { Item } from "./Item";
import { ItemsContext } from "./ItemsContext";



const Items = () => {
  const {items} = useContext(ItemsContext)
  useEffect(() => {
  }, [items]);
  return <ul className='list-group'>{items && items.map((item) => <Item key={item.id} item={item} />)}</ul>;
};

export default Items;
