import { createContext, FC, useContext } from "react";

import { boardStore } from "./boardStore";
import { playersStore } from "./playersStore";

const combinedStores = {
  boardStore,
  playersStore,
};

export const storesContext = createContext(combinedStores);

export const StoreProvider: FC = ({ children }) => (
  <storesContext.Provider value={combinedStores}>
    {children}
  </storesContext.Provider>
);

export const useStores = () => useContext(storesContext);
