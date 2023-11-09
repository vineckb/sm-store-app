import { Button, HStack, Text, View } from "native-base";
import styled from "styled-components";
import config from "../../config";

export const Wrapper = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Container = styled(HStack)`
  background: white;
  border: 2px solid ${config.color.primary.default};
  margin: 15px;
  padding: 15px 20px;
  border-radius: 10px;
  flex: 1;
  align-items: center;
`;

export const Subtotal = styled(Text)`
  margin-top: 5px;
  margin-left: 10px;
  font-size: 20px;
`;

export const ViewCartButton = styled(Button)`
  background-color: ${({ isPressed }) =>
    isPressed ? config.color.primary.dark : config.color.primary.default};
  color: ${config.color.primary.text};
  margin-right: 0;
  margin-left: auto;
`;
