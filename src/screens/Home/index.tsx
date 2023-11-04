import { VStack, IconButton, FlatList } from "native-base";
import { OffersList } from "./OffersList";
import { AppBar } from "../../components/AppBar";
import { SectionsTabs } from "../../components/SectionsTabs";
import { Logo } from "../../components/Logo";
import { AntDesign } from "@expo/vector-icons";

export function Home() {
  return (
    <VStack>
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
      <FlatList
        data={Array.from({ length: 8 })}
        renderItem={({ index }) => <OffersList key={`all-${index}`} />}
      />
    </VStack>
  );
}
