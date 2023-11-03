import { Box } from "native-base";
import { OffersList } from "./parts/OffersList";
import { AppBar } from "../../components/AppBar";
import { SectionsTabs } from "../../components/SectionsTabs";

export function Home() {
  return (
    <Box>
      <AppBar />
      <SectionsTabs />
      <OffersList />
    </Box>
  );
}
