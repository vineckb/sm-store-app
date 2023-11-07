import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartContext } from "../contexts/Cart";
import { ID, Order, OrderProduct } from "../types";
import { api } from "../services/api";
import { AxiosResponse } from "axios";

export function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<{ [key: string]: OrderProduct }>({});
  const [orderId, setOrderId] = useState<ID>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [isSubmiting, setSubmiting] = useState<boolean>(false);

  const totalPrice = useMemo(() => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(
      Object.keys(products).reduce((acc, curr) => {
        const product = products[curr];

        return acc + product.price * product.quantity;
      }, 0)
    );
  }, [products]);

  const add = useCallback(
    (
      {
        price,
        promotionalPrice,
        ...product
      }: Omit<OrderProduct, "quantity"> & { promotionalPrice?: number },
      quantity: number = 1
    ) => {
      setProducts({
        ...products,
        [product.productId]: {
          ...product,
          price: promotionalPrice || price,
          quantity,
        },
      });
    },
    [products]
  );

  useEffect(() => {
    const storedOrderId = localStorage.getItem("@OrderId");
    if (storedOrderId) {
      setOrderId(storedOrderId);
    } else {
      api.get("/orders/current").then((response: AxiosResponse<Order>) => {
        setOrderId(response.data.id);
        response.data.products.map(({ quantity, ...product }) => {
          add(product, quantity);
        });
      });
    }
  }, [add]);

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
      const { [id]: _, ...rest } = products;
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
