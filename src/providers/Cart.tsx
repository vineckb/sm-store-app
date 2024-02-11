import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartContext } from "../contexts/Cart";
import { CartProductsList } from "../types/cart";
import { ID } from "../types/global";
import { Product } from "../types";

export function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<CartProductsList>({});
  const [orderId, setOrderId] = useState<ID>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [isSubmiting, setSubmiting] = useState<boolean>(false);

  const totalPrice = 0;

  const add = useCallback(
    (product: Product) => {
      if (products[product.id]) return;

      setProducts({
        ...products,
        [product.id]: {
          quantity: 1,
          price: product.price,
          promotionalPrice: product.promotionalPrice,
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
    (id: ID) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setProducts(
        Object.keys(products)
          .filter((key) => key !== id)
          .reduce((obj, key) => {
            obj[key] = products[key];
            return obj;
          }, {} as CartProductsList)
      );
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
