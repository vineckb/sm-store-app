import { Button, View } from "native-base";
import styled from "styled-components";

export const Container = styled(View)`
  min-width: 200px;
  height: 100%;
  background: white;
  position: absolute;
  padding: 10px;
`;

export const MenuItem = styled(Button)`
  text-align: right;
  justify-content: start;
`;
