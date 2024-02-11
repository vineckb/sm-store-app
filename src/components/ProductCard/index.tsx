import { CartProduct } from "../../types";
import { VStack } from "native-base";
import {
  Footer,
  Image,
  ImageContainer,
  Price,
  StripedPrice,
  Title,
  Wrapper,
} from "./styles";
import { formatCurrency } from "../../helpers/currency";
import { CartActions } from "../CartActions";

export interface ProductCardProps {
  data: CartProduct;
}

export function ProductCard({ data }: ProductCardProps) {
  return (
    <Wrapper style={{ elevation: 2 }}>
      <ImageContainer>
        <Image
          // @ts-ignore
          source={{ uri: process.env.EXPO_PUBLIC_API_URL + data.imageUrl }}
          alt={data.title}
          resizeMode="center"
        />
      </ImageContainer>
      <Title>{data.title}</Title>
      <VStack mt="auto">
        {data.promotionalPrice > 0 && (
          <>
            <StripedPrice>{formatCurrency(data.price)}</StripedPrice>
            <Price>{formatCurrency(data.promotionalPrice)}</Price>
          </>
        )}

        {(!data.promotionalPrice || data.promotionalPrice <= 0) && (
          <Price>{formatCurrency(data.price)}</Price>
        )}
      </VStack>
      <Footer>
        <CartActions product={data} />
      </Footer>
    </Wrapper>
  );
}
