import {useState} from "react";
import {ContextProvider} from "./context/ContextProvider.jsx";
import './App.css'
import Form from "./components/Form.jsx"
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";

function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(() => [...items, item]);
  }

  function handleDeleteItem(id) {
    // setItems(() => items.filter((elem) => (elem.id !== id) ? elem : null));
    setItems(() => items.filter((elem) => elem.id !== id));
  }

  function handleToggleItems(id) {
    setItems(() => items.map(elem => (elem.id === id) ? {...elem, packed: !elem.packed} : elem));
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
