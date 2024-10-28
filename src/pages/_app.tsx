import { QUERY_CLIENT } from "@/libs/reactQuery";
import { GLOBAL_THEME } from "@/styles/globalTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <ThemeProvider theme={GLOBAL_THEME}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
