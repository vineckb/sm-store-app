import { Pressable } from "native-base";
import styled from "styled-components";
import config from "../../config";

export const Wrapper = styled(Pressable)`
  background: ${config.color.primary.default};
  color: ${config.color.primary.text};
`;
