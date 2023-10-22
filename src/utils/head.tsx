import NextHead from "next/head";
import React from "react";
import {useTheme} from "next-themes";

type Props = {
    title: string;
    description?: string;
}

export const Head = (props: Props) => {
    const config = {
        title: props.title,
        description: props.description,
    }
    if (config.description === undefined) config.description = "便利な単語帳アプリです";
    return (
        <NextHead>
            <title>{config.title}</title>
            <meta key="title" content={config.description} property="og:title"/>
            <meta content={config.description} property="og:description"/>
            <meta content={config.description} name="description"/>
            <meta
                key="viewport"
                content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                name="viewport"
            />
            <meta name="theme-color" content={useTheme().resolvedTheme == "light" ? "#ffffff" : "#000000"}/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="/icon-192x192.png"/>
            <link rel="icon" href="/favicon.ico"/>
        </NextHead>
    );
};
