import * as React from "react";
//import "react-native-gesture-handler";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Route from "./routes/Route";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    text: "#000000",
    primary: "green",
    accent: "yellow",
    background: "#000000",
    dark: true,
  },
};

const queryClient = new QueryClient();
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Route />
      </QueryClientProvider>
    </PaperProvider>
  );
}
