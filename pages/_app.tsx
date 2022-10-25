import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SharedTextProvider } from "../lib/DarkModeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SharedTextProvider>
      <Component {...pageProps} />
    </SharedTextProvider>
  );
}

export default MyApp;
