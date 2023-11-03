import { Pressable } from "native-base";
import { Button } from "./styles";

export function AddToCartButton() {
  return (
    <Pressable onPress={() => console.log("addToCart")}>
      {({ isPressed }) => <Button isPressed={isPressed}>Comprar</Button>}
    </Pressable>
  );
}
