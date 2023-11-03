import { FlatList, Text, View } from "native-base";
import styled from "styled-components";

export const Container = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background: #e40613;
`;

export const MenuButton = styled(Text)`
  align-items: center;
  background-color: transparent;
  padding: 10px 15px;
`;

export const Tabs = styled(FlatList)`
  flex-grow: 1;
`;

export const Tab = styled(Text)`
  padding: 8px 13px 15px;
  color: #fff;
`;
