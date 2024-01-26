import {useState} from "react";
import {ContextProvider} from "./context/ContextProvider.jsx";
import './App.css'
import Form from "./components/Form.jsx"
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";

function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    if (!items.some((elem) => elem.description === item.description)) {
    // Add the new item to the items array
    setItems((prevItems) => [...prevItems, item]);
  }
    // setItems(() => [...items, item]);
    console.log(items);
  }

  function handleDeleteItem(id) {
    // setItems(() => items.filter((elem) => (elem.id !== id) ? elem : null));
    setItems(() => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems(() => items.map(item => (item.id === id) ? {...item, packed: !item.packed} : item));
  }

  function handleClearList() {
    const confirmed = window.confirm("Do you want to delete the list");
    if (confirmed) setItems(() => []);
  }

  return (
      <ContextProvider value={{items, handleAddItems, handleDeleteItem, handleToggleItems, handleClearList}}>
        <div className="app">
          <h1>🏝️ Far Away 🧳</h1>
          <Form/>
          <PackingList/>
          <Stats/>
        </div>
      </ContextProvider>
  );
}

export default App
