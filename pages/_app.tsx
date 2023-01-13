import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { SharedThemeProvider } from "../lib/DarkModeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SharedThemeProvider>
        <Component {...pageProps} />
      </SharedThemeProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
