import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeBaseProvider, StatusBar } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "./screens/Cart";
import { SignIn } from "./screens/SignIn";
import { Search } from "./screens/Search";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <StatusBar backgroundColor="#E40613" barStyle="light-content" />

        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Catalog">
              <Stack.Screen
                name="Catalog"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Cart"
                component={Cart}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
