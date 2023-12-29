import {
  Actions,
  Content,
  Image,
  ImageContainer,
  Price,
  StripedPrice,
  Title,
  Wrapper,
} from "./styles";
import { CartProduct } from "../../types";
import { formatCurrency } from "../../helpers/currency";
import { CartActions } from "../CartActions";

export interface ProductListItemProps {
  data: CartProduct;
}

export function ProductListItem({ data }: ProductListItemProps) {
  return (
    <Wrapper style={{ elevation: 5 }}>
      <ImageContainer>
        <Image
          // @ts-ignore
          source={{ uri: process.env.EXPO_PUBLIC_API_URL + data.imageUrl }}
          alt={data.title}
          resizeMode="center"
        />
      </ImageContainer>
      <Content>
        <Title>{data.title}</Title>
        <Price>{formatCurrency(data.promotionalPrice || data.price)}</Price>
      </Content>
      <Actions>
        <CartActions product={data} />
      </Actions>
    </Wrapper>
  );
}
