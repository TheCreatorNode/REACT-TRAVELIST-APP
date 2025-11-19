import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDelete, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("inputs");

  let sortedItems;

  if (sortBy === "inputs") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDelete={onDelete}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="inputs">sort by inputs</option>
          <option value="description"> sort by description</option>
          <option value="packed"> sort by packed items</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
