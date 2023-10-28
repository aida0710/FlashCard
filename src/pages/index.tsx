import type {NextPage} from "next";
import {Head} from "@/src/functions/client/head";
import React from "react";

const Home: NextPage = () => {



    return (
        <div>
            <Head title={"Home | FlashCard"}/>
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">テストメッセージ～～～～～～～～～～～～～～～～～～</h2>
                    <p className="text-sm text-muted-foreground">説明など</p>
                </div>
            </div>
        </div>
    )
};

export default Home;
