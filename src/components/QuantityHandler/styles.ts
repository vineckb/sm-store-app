import { View, Input as NBInput, IconButton } from "native-base";
import styled from "styled-components";

import config from "../../config";

export const Wrapper = styled(View)`
  background-color: ${config.color.primary.default};
  flex-direction: row;
  display: flex;
  border-radius: 5px;
`;

export const Button = styled(IconButton)`
  background: ${(props) =>
    props.isPressed ? config.color.primary.dark : "transparent"};
`;
// props.isPressed ? config.color.primary.dark : config.color.primary.default};

// export const Input = styled(NBInput)`
//   border: 0;
//   background: white;
//   flex-grow: 1;
//   height: 25px;
// `;
