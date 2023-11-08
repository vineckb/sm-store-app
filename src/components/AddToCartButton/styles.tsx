import { Button as NBButton } from "native-base";
import styled from "styled-components";

export const Button = styled(NBButton)`
  text-transform: uppercase;
  background: ${({ isPressed }) => (isPressed ? "#5b282b" : "#E40613")};
  color: #fff;
  border-radius: 5px;
  padding: 13px 9px;
  text-align: center;
`;
