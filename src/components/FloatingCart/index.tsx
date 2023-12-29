import Icon from "@expo/vector-icons/AntDesign";
import { Container, Subtotal, ViewCartButton, Wrapper } from "./styles";
import { useCart } from "../../hooks/useCart";
import config from "../../config";
import { navigate } from "../../services/navigator";
import { formatCurrency } from "../../helpers/currency";

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
        <Subtotal>{formatCurrency(totalPrice)}</Subtotal>
        <ViewCartButton onPress={() => navigate("Cart")}>
          VER CARRINHO
        </ViewCartButton>
      </Container>
    </Wrapper>
  );
}
