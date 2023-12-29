import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeBaseProvider, StatusBar, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "./screens/Cart";
import { SignIn } from "./screens/SignIn";
import { Search } from "./screens/Search";
import { setTopLevelNavigator } from "./services/navigator";
import { Section } from "./screens/Section";
import { StackParamList } from "./types";
import { CartProvider } from "./providers/Cart";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const Stack = createNativeStackNavigator<StackParamList>();

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <StatusBar backgroundColor="#E40613" barStyle="light-content" />

        <QueryClientProvider client={queryClient}>
          <NavigationContainer
            ref={(navigatorRef) => {
              setTopLevelNavigator(navigatorRef);
            }}
          >
            <CartProvider>
              <Stack.Navigator
                initialRouteName="Catalog"
                screenOptions={{
                  navigationBarColor: "#E40613",
                  headerStyle: {
                    backgroundColor: "#E40613",
                  },
                  headerTintColor: "#fff",
                }}
              >
                <Stack.Screen
                  name="Catalog"
                  component={Home}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Section"
                  component={Section}
                  options={{
                    headerShown: true,
                    title: "Carregando...",
                  }}
                />
                <Stack.Screen
                  name="Search"
                  component={Search}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Cart"
                  component={Cart}
                  options={{ headerShown: true, title: "Carrinho de compras" }}
                />
                <Stack.Screen
                  name="SignIn"
                  component={SignIn}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </CartProvider>
          </NavigationContainer>
        </QueryClientProvider>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
