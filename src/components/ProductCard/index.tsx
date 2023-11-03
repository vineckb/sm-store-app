import { Dimensions } from "react-native";
import { Product } from "../../types";
import { Box, HStack, Text, VStack, View } from "native-base";
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
  index: number;
}

export function ProductCard({ data, index }: ProductCardProps) {
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
      <VStack>
        {!!data.promotionalPrice && (
          <>
            <StripedPrice>{formatCurrency(data.price)}</StripedPrice>
            <Price>{formatCurrency(data.promotionalPrice)}</Price>
          </>
        )}

        {!data.promotionalPrice && <Price>{formatCurrency(data.price)}</Price>}
      </VStack>
      <Footer>
        <AddToCartButton />
      </Footer>
    </Wrapper>
  );
}
