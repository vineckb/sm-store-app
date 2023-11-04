import Icon from "@expo/vector-icons/MaterialIcons";
import { MenuButton } from "./SectionsTabs/styles";
import { useDisclose } from "native-base";
import { SideNav } from "./SideNav";

export function SectionsMenuButton() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <MenuButton onPress={onOpen}>
        <Icon name="menu" color="white" size={28} />
      </MenuButton>
      {isOpen && <SideNav isOpen={isOpen} onClose={onClose} />}
    </>
  );
}
