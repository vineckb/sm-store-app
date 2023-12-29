import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartContext } from "../contexts/Cart";
import { CartProduct, CartResource, ID, Product } from "../types";
// import { api } from "../services/api";
// import { AxiosResponse } from "axios";
import { formatCurrency } from "../helpers/currency";

export function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [orderId, setOrderId] = useState<ID>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [isSubmiting, setSubmiting] = useState<boolean>(false);

  const totalPrice = useMemo(
    () =>
      products.reduce((acc, curr) => {
        return acc + (curr.promotionalPrice || curr.price) * curr.quantity;
      }, 0),
    [products]
  );

  const add = useCallback(
    (product: Product) => {
      setProducts([
        ...products,
        {
          ...product,
          quantity: 1,
        },
      ]);
    },
    [products]
  );

  useEffect(() => {
    // const storedOrderId = localStorage.getItem("@OrderId");
    // const storedOrderId = false;
    // if (storedOrderId) {
    //   setOrderId(storedOrderId);
    // } else {
    //   api
    //     .get("/orders/current")
    //     .then((response: AxiosResponse<CartResource>) => {
    //       setOrderId(response.data.id);
    //       setProducts(products);
    //     });
    // }
  }, []);

  const updateQuantity = useCallback(
    (id: ID, quantity: number) => {
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, quantity } : product
        )
      );
    },
    [products]
  );

  const remove = useCallback(
    (productId: ID) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setProducts(products.filter((product) => product.id !== productId));
    },
    [products]
  );

  const context = {
    totalPrice,

    isLoading,
    setLoading,

    isFetching,
    setFetching,

    isSubmiting,
    setSubmiting,

    products,
    orderId,
    setOrderId,
    add,
    updateQuantity,
    remove,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}
