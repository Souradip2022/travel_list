import {createContext, useContext} from "react";

export const AppContext = createContext({
  items: [],
  handleAddItems: function() {

  },
  handleDeleteItem: function () {

  },
  handleToggleItems: function () {

  },
  handleClearList: function () {

  }
});
export const ContextProvider = AppContext.Provider;

export default function useProvider() {
  return useContext(AppContext);
}
