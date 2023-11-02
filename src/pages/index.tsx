'use client';
import type {NextPage} from "next";
import {Head} from "@/src/functions/client/head";
import React from "react";

const Home: NextPage = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    return (
        <div>
            <Head title={"Home | FlashCard"}/>
            {numbers.map((number:number) =>
                <div key={number} className="flex items-center justify-between　">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">テストメッセージ～～～～～～～～～～～～～～～～～～</h2>
                        <p className="text-sm text-muted-foreground">説明など</p>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Home;
