import { Tab, Tabs, Container } from "./styles";
import { SectionsMenuButton } from "../SectionsMenuButton";

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
      <SectionsMenuButton />
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
