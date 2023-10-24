import type {AppProps} from "next/app";
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from '@clerk/themes';
import {ThemeProvider} from "@/src/components/theme-provider";
import '@/src/globals.css'

function MyApp({Component, pageProps}: AppProps) {

    return (
        <ClerkProvider appearance={{baseTheme: dark}} {...pageProps}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange>
                <Component {...pageProps} />
            </ThemeProvider>
        </ClerkProvider>
    );
}

export default MyApp;
