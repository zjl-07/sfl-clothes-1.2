import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_SHOP_DATA:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};
