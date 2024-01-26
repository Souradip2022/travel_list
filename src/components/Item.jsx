import useProvider from "../context/ContextProvider.jsx";

function ItemsList({item}) {
  const {handleToggleItems, handleDeleteItem} = useProvider();
  return (
      <li>
        <input type="checkbox"
               value={item.packed}
               onChange={() => handleToggleItems(item.id)}/>
        <span style={(item.packed) ? {textDecoration: "line-through"} : {}}>
          {`${item.quantity}  ${item.description}`}
        </span>
        <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      </li>
  );
}

export default ItemsList;