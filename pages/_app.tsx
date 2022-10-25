import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SharedThemeProvider } from "../lib/DarkModeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SharedThemeProvider>
      <Component {...pageProps} />
    </SharedThemeProvider>
  );
}

export default MyApp;
