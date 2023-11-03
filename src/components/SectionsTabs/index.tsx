import { MenuButton, Tab, Tabs, Container } from "./styles";
import Icon from "@expo/vector-icons/MaterialIcons";

export function SectionsTabs() {
  const data = [
    { id: 1, title: "Açougue" },
    { id: 2, title: "Hortifruti" },
    { id: 3, title: "Padaria" },
    { id: 4, title: "Grãos" },
    { id: 5, title: "Bebidas" },
  ];

  return (
    <Container>
      <MenuButton>
        <Icon name="menu" color="white" size={28} />
      </MenuButton>
      <Tabs
        horizontal
        data={data}
        renderItem={({
          index,
          item,
        }: {
          index: number;
          item: { id: number; title: string };
        }) => <Tab key={index}>{item.title}</Tab>}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
