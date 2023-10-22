import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import type {AppProps} from "next/app";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

function MyApp({Component, pageProps}: AppProps) {

    return (
          <ClerkProvider appearance={{ baseTheme: dark }} {...pageProps}>
            <NextThemesProvider defaultTheme="system" attribute="class">
                <NextUIProvider>
                    <Component {...pageProps} />
                </NextUIProvider>
            </NextThemesProvider>
          </ClerkProvider>
    );
}

export default MyApp;
