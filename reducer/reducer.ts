export enum Types {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
  RemoveCart = "REMOVE_CART",
}

// Product

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type ProductPayload = {
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions = {
  type: Types;
  payload: any;
};

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

// ShoppingCart
export type ShoppingCartActions = {
  type: Types;
  payload?: any;
};

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Add:
      return state + 1;
    case Types.RemoveCart:
      if (state > 1) return state - 1;
    default:
      return state;
  }
};
