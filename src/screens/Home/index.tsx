import { VStack, IconButton, FlatList } from "native-base";
import { OffersList } from "./OffersList";
import { AppBar } from "../../components/AppBar";
import { SectionsTabs } from "../../components/SectionsTabs";
import { Logo } from "../../components/Logo";
import { AntDesign } from "@expo/vector-icons";
import { FeaturedSections } from "./FeaturedSections";

export function Home() {
  return (
    <VStack bg="red" flex={1}>
      <AppBar>
        <Logo />

        <IconButton
          icon={<AntDesign name="search1" color="white" size={24} />}
          mr={0}
          ml="auto"
          rounded="full"
        />
        <IconButton icon={<AntDesign name="user" color="white" size={24} />} />
      </AppBar>
      <SectionsTabs />
      <FeaturedSections />
    </VStack>
  );
}
