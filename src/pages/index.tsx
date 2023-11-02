'use client';
import type {NextPage} from "next";
import {Head} from "@/src/functions/client/head";
import React from "react";
import {UserButton} from "@clerk/nextjs";
import Link from "next/link";

const Home: NextPage = () => {

    return (
        <div>
            <Head title={"Home | FlashCard"}/>
            <h1>Home</h1>
            <UserButton />
            <Link href={"/folders"}>フォルダー一覧</Link>


        </div>
    )
};

export default Home;
