import useProvider from "../context/ContextProvider.jsx";
import {useState} from "react";
import ItemsList from "./Item.jsx";

function PackingList() {
  const {items, handleClearList} = useProvider();
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

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
              <ItemsList key={item.id} item={item}/>
          ))}
        </ul>
        <div className="actions">
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={() => handleClearList()}>Clear list</button>
        </div>
      </div>
  )
}

export default PackingList;