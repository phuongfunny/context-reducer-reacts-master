import React, { createContext, useReducer, Dispatch } from "react";
import {
  ProductActions,
  productReducer,
  ShoppingCartActions,
  shoppingCartReducer,
} from "../reducer/reducer";

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
};

const initialState = {
  products: [],
  shoppingCart: 0,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { products, shoppingCart }: InitialStateType,
  action: ProductActions | ShoppingCartActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
});

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
