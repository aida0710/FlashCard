'use client';
import type {NextPage} from "next";
import {Head} from "@/src/functions/client/head";
import React from "react";
import {UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {Button} from "@mui/material";

const Home: NextPage = () => {

    return (
        <div>
            <Head title={"Home | FlashCard"}/>
            <h1>Home</h1>
            <UserButton />
            <Link href={"/folders"}>フォルダー一覧</Link>
            <Button variant="contained">Hello World</Button>


        </div>
    )
};

export default Home;
