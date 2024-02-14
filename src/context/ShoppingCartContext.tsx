import { ReactNode, createContext, useContext, useState } from "react";

type shoppingCartProps = {
  children: ReactNode;
};
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItemQuantity: (id: number) => void;
};
type CartItem = {
  id: number;
  quantity: number;
};

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: shoppingCartProps) {
  const [cartItems, setCartItem] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemQuantity(id: number) {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseItemQuantity(id: number) {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeItemQuantity(id: number) {
    setCartItem((currItems) => {
      currItems.filter((item) => item.id !== id);
    });
  }

  <ShoppingCartContext.Provider
    value={{
      getItemQuantity,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItemQuantity
    }}
  >
    {children}
  </ShoppingCartContext.Provider>;
}
