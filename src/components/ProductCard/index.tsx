import { Product } from "../../types";
import { Text, VStack } from "native-base";
import {
  Footer,
  Image,
  ImageContainer,
  Price,
  StripedPrice,
  Title,
  Wrapper,
} from "./styles";
import { AddToCartButton } from "../AddToCartButton";
import { formatCurrency } from "../../helpers/currency";

export interface ProductCardProps {
  data: Product;
}

export function ProductCard({ data }: ProductCardProps) {
  return (
    <Wrapper style={{ elevation: 2 }}>
      <ImageContainer>
        <Image
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
        <AddToCartButton />
      </Footer>
    </Wrapper>
  );
}
