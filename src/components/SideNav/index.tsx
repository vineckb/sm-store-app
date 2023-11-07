import {
  Backdrop,
  CloseIcon,
  FlatList,
  IconButton,
  Overlay,
} from "native-base";
import { Container, MenuItem } from "./styles";
import { useFetchSections } from "../../hooks/catalog";

export interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideNav({ isOpen, onClose }: SideNavProps) {
  const { isLoading, data } = useFetchSections();

  return (
    <Overlay isOpen={isOpen}>
      <Backdrop onPress={onClose} />

      <Container>
        <IconButton
          onPress={onClose}
          icon={<CloseIcon size={30} color="#e40613" />}
          style={{ marginLeft: "auto", marginRight: 0 }}
        />
        {isOpen && !isLoading && (
          <FlatList
            data={data}
            renderItem={({ item, index }: any) => (
              <MenuItem key={index} variant={"ghost"} colorScheme={"red"}>
                {item.title}
              </MenuItem>
            )}
            contentContainerStyle={{ gap: 10 }}
          />
        )}
      </Container>
    </Overlay>
  );
}
