export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    cartItems => cartItems.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
