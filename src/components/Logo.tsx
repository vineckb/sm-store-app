import { Image } from "native-base";

export function Logo() {
  return (
    <Image
      source={require("../../assets/logo-small.jpg")}
      style={{ margin: 10 }}
      alt="Supermercado Europa"
    />
  );
}
