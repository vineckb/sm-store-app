import {
  Backdrop,
  CloseIcon,
  FlatList,
  IconButton,
  Overlay,
  Text,
  useDisclose,
} from "native-base";
import { Container, MenuItem } from "./styles";

export interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideNav({ isOpen, onClose }: SideNavProps) {
  const data = [
    { id: 1, title: "Açougue" },
    { id: 2, title: "Hortifruti" },
    { id: 3, title: "Padaria" },
    { id: 4, title: "Grãos" },
    { id: 5, title: "Bebidas" },
    { id: 11, title: "Açougue" },
    { id: 22, title: "Hortifruti" },
    { id: 32, title: "Padaria" },
    { id: 44, title: "Grãos" },
    { id: 54, title: "Bebidas" },
    { id: 18, title: "Açougue" },
    { id: 92, title: "Hortifruti" },
    { id: 83, title: "Padaria" },
    { id: 94, title: "Grãos" },
    { id: 45, title: "Bebidas" },
    { id: 61, title: "Açougue" },
    { id: 39, title: "Hortifruti" },
    { id: 43, title: "Padaria" },
    { id: 91, title: "Grãos" },
    { id: 95, title: "Bebidas" },
  ];

  return (
    <Overlay isOpen={isOpen}>
      <Backdrop onPress={onClose} />

      <Container>
        <IconButton
          onPress={onClose}
          icon={<CloseIcon size={30} color="#e40613" />}
          style={{ marginLeft: "auto", marginRight: 0 }}
        />
        <FlatList
          data={data}
          renderItem={({ item, index }: any) => (
            <MenuItem key={index} variant={"ghost"} colorScheme={"red"}>
              {item.title}
            </MenuItem>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </Container>
    </Overlay>
  );
}
