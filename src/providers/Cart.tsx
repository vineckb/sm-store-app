import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartContext } from "../contexts/Cart";
import { CartProduct, CartResource, ID } from "../types";
import { api } from "../services/api";
import { AxiosResponse } from "axios";
import { formatCurrency } from "../helpers/currency";

export function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<{
    [key: ID]: CartProduct;
  }>({});
  const [orderId, setOrderId] = useState<ID>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [isSubmiting, setSubmiting] = useState<boolean>(false);

  const totalPrice = useMemo(() => {
    return formatCurrency(
      Object.keys(products).reduce((acc, curr) => {
        const product = products[curr];

        return acc + product.price * product.quantity;
      }, 0)
    );
  }, [products]);

  const add = useCallback(
    (productId: ID, price: number) => {
      setProducts({
        ...products,
        [productId]: {
          price,
          quantity: 1,
        },
      });
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
      setProducts({
        ...products,
        [id]: {
          ...products[id],
          quantity,
        },
      });
    },
    [products]
  );

  const remove = useCallback(
    (productId: ID) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [productId]: _, ...rest } = products;
      setProducts(rest);
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
