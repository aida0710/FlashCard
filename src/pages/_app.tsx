import type {AppProps} from "next/app";
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from '@clerk/themes';
import {ThemeProvider} from "@/src/components/theme-provider";
import '@/src/globals.css'
import {Layout} from "@/src/components/layout/layout";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function MyApp({Component, pageProps}: AppProps) {

    return (
        <ClerkProvider appearance={{baseTheme: dark}} {...pageProps}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </ClerkProvider>
    );
}

export default MyApp;
