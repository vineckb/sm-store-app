import Icon from "@expo/vector-icons/AntDesign";
import { Wrapper } from "./styles";
import { useCart } from "../../hooks/useCart";
import { Text } from "native-base";

export function FloatingCart() {
  const { totalPrice } = useCart();

  return (
    <Wrapper>
      <Icon name="shoppingcart" />
      <Text>{totalPrice}</Text>
    </Wrapper>
  );
}
