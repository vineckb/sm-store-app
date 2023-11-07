import { Text, View, Image as NBImage } from "react-native";
import styled from "styled-components";

export const Wrapper = styled(View)`
  width: 150px;
  background: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;
export const ImageContainer = styled(View)`
  width: 130px;
  height: 130px;
  margin-bottom: 10px;
`;
export const Image = styled(NBImage)`
  width: 100%;
  height: 100%;
`;
export const Title = styled(Text)``;

export const StripedPrice = styled(Text)`
  text-decoration: line-through;
  opacity: 0.6;
`;

export const Price = styled(Text)`
  font-size: 20px;
  color: #e40613;
`;

export const Footer = styled(View)`
  margin-top: 5px;
  margin-bottom: 0;
`;
