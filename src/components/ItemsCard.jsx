import Items from "./Items";
import { ItemsContext } from "./ItemsContext";
import { useContext, useState } from "react";

const ItemsCard = () => {
  const { addItem } = useContext(ItemsContext);
  const [name, setName] = useState("");

  const addNewItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 100000000),
      name,
      comments: []
    };

    addItem(newItem);
    setName("");
  };
  return (
    <div>
      <div className='items-card'>
        <h1>Items</h1>
        <form
          className='items-card-input'
          onSubmit={addNewItem}>
          <input
            type='text'
            className='form-input'
            placeholder='Type name here...'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className='btn-new-item'
            type='submit'>
            Add New
          </button>
        </form>
        <Items />
      </div>
    </div>
  );
};

export default ItemsCard;
