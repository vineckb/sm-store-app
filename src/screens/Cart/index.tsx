import { Button, FlatList, Text, VStack } from "native-base";
import { useCart } from "../../hooks/useCart";
import { ProductListItem } from "../../components/ProductListItem";
import { formatCurrency } from "../../helpers/currency";
import config from "../../config";
import { Alert } from "react-native";

export function Cart() {
  const { products, totalPrice } = useCart();

  return (
    <VStack flex={1}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 220 }}
      />

      <VStack
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#fff",
          padding: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowRadius: 50,
          shadowOpacity: 1,
          elevation: 4,
          borderWidth: 2,
          borderBottomWidth: 0,
          borderColor: config.color.primary.default,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text>Subtotal: {formatCurrency(totalPrice)}</Text>
        <Text>Taxa de serviço: {formatCurrency(totalPrice * 0.12)}</Text>
        <Text>Frete: {formatCurrency(5)}</Text>
        <Text>total: {formatCurrency(totalPrice * 1.12 + 5)}</Text>
        <Button
          bgColor={config.color.primary.default}
          mt={5}
          onPress={() => Alert.alert("Compra finalizada com sucesso")}
        >
          FINALIZA COMPRA
        </Button>
      </VStack>
    </VStack>
  );
}
