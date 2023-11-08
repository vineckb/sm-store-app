import { Input } from "native-base";
import { Button, Wrapper } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import config from "../../config";
import { ID } from "../../types";
import { useCart } from "../../hooks/useCart";

export interface QuantityHandlerProps {
  productId: ID;
  quantity: number;
}

export function QuantityHandler({ productId, quantity }: QuantityHandlerProps) {
  const { updateQuantity } = useCart();

  function handleRemove() {
    updateQuantity(productId, quantity - 1);
  }
  function handleAdd() {
    updateQuantity(productId, quantity + 1);
  }

  return (
    <Wrapper>
      <Button
        onPress={handleRemove}
        icon={<Ionicons name="remove" size={20} color="white" />}
      />
      <Input
        borderWidth={2}
        borderColor={config.color.primary.default}
        backgroundColor="white"
        textAlign="center"
        w={50}
        value={String(quantity)}
        onChangeText={(value: string) => updateQuantity(productId, ~~value)}
      />
      <Button
        onPress={handleAdd}
        icon={<Ionicons name="add" size={20} color="white" />}
      />
    </Wrapper>
  );
}
