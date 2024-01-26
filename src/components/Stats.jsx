import useProvider from "../context/ContextProvider.jsx";
function Stats() {
  const {items} = useProvider();

  const totItems = items.length;
  const packedItems = items.filter((item) => (item.packed === true) ? item : null);
  const packedLength = packedItems.length;
  const packedPercentage= Math.floor((packedLength / totItems) * 100);
  // console.log(packedItems);
  // console.log(packedLength);

  return (
      <div className="stats">
        {(packedLength >= 1) ? <em> 💼 You have {totItems} items on your list, and you already packed {packedLength} ({packedPercentage}%)</em> :
            <em>Start adding some items to your packing list 🚀</em>
        }
      </div>
  )
}

export default Stats;