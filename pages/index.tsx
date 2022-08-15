import React, { useContext } from "react";
import { AppContext } from "../contexts/context";
import { Types } from "../reducer/reducer";

const Products = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log("🚀 ~ file: index.tsx ~ line 7 ~ Products ~ state", state);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
          });
        }}
      >
        add
      </button>
      {state.shoppingCart}
      <button
        onClick={() => {
          dispatch({
            type: Types.RemoveCart,
          });
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Products;
