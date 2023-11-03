import '@/src/globals.css'
import type {AppProps} from "next/app";
import Layout from "@/src/components/layout/layout";
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
import {dark} from '@clerk/themes';
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {NextUIProvider} from "@nextui-org/system";

function MyApp({Component, pageProps}: AppProps) {

    return (
        <ClerkProvider appearance={{baseTheme: dark}} {...pageProps}>
            <NextThemesProvider defaultTheme="dark" attribute="class">
                <NextUIProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </NextUIProvider>
            </NextThemesProvider>
        </ClerkProvider>
    );
}

export default MyApp;
