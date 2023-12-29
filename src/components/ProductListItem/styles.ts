import { Text, View, Image as NBImage } from "react-native";
import styled from "styled-components";

export const Wrapper = styled(View)`
  background: #fff;
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;
export const ImageContainer = styled(View)`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
`;
export const Image = styled(NBImage)`
  width: 100%;
  height: 100%;
`;
export const Content = styled(View)`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: auto;
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

export const Actions = styled(View)`
  margin-top: 5px;
  margin-bottom: 0;
`;
