import { Text } from "native-base";
import styled from "styled-components";

export interface ButtonProps {
  isPressed?: boolean;
}

export const Button = styled(Text)<ButtonProps>`
  text-transform: uppercase;
  background: ${({ isPressed }) => (isPressed ? "#5b282b" : "#E40613")};
  color: #fff;
  border-radius: 5px;
  padding: 9px;
  text-align: center;
`;
