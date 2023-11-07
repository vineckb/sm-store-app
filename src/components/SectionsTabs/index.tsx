import { Tab, Tabs, Container } from "./styles";
import { SectionsMenuButton } from "../SectionsMenuButton";
import { useFetchSections } from "../../hooks/catalog";
import { Section } from "../../types";
import { navigate } from "../../services/navigator";
import { HStack, Skeleton } from "native-base";

export function SectionsTabs() {
  const { isLoading, data } = useFetchSections();

  return (
    <Container>
      <SectionsMenuButton />
      {!isLoading && (
        <Tabs
          horizontal
          data={data}
          renderItem={({ index, item }: { index: number; item: Section }) => (
            <Tab
              key={index}
              onPress={() =>
                navigate("Section", {
                  sectionId: item.id,
                })
              }
            >
              {item.title}
            </Tab>
          )}
          showsHorizontalScrollIndicator={false}
        />
      )}
      {isLoading && (
        <HStack>
          <Skeleton.Text lines={1} width={60} mb={2} mr={5} />
          <Skeleton.Text lines={1} width={60} mb={2} mr={5} />
          <Skeleton.Text lines={1} width={60} mb={2} mr={5} />
        </HStack>
      )}
    </Container>
  );
}
