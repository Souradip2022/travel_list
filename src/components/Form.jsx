import {useEffect, useRef, useState} from "react";
import useProvider from "../context/ContextProvider.jsx"

function Form() {
  const {handleAddItems} = useProvider();

  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const descrRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        // console.log(descrRef.current);
        descrRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const item = {description, quantity, packed: false, id: Date.now()};
    handleAddItems(item);
    setQuantity(1);
    setDescription("");
    // console.log(description);
  }

  return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({length: 20}, (_, i) => i + 1).map((num) =>
              (<option value={num} key={num}>
                {num}
              </option>))}
        </select>
        <input type="text"
               ref={descrRef}
               value={description}
               placeholder="Item..."
               onChange={(e) => setDescription(() => e.target.value)}
        />
        <button type="submit">
          Add
        </button>
      </form>
  );
}

export default Form;