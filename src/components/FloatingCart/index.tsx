import Icon from "@expo/vector-icons/AntDesign";
import { Container, Subtotal, ViewCartButton, Wrapper } from "./styles";
import { useCart } from "../../hooks/useCart";
import config from "../../config";

export function FloatingCart() {
  const { totalPrice, products } = useCart();

  if (!Object.keys(products).length) return null;

  return (
    <Wrapper>
      <Container>
        <Icon
          name="shoppingcart"
          size={30}
          color={config.color.primary.default}
        />
        <Subtotal>{totalPrice}</Subtotal>
        <ViewCartButton>VER CARRINHO</ViewCartButton>
      </Container>
    </Wrapper>
  );
}
