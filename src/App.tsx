import { Home } from "./screens/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeBaseProvider, StatusBar } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <StatusBar backgroundColor="#E40613" barStyle="light-content" />

        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
