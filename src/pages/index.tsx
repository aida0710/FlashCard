import type {NextPage} from "next";
import {Head} from "@/src/client/utils/head";
import {UserButton, UserProfile} from "@clerk/nextjs";

const Home: NextPage = () => {

    return (
        <div>
            <Head title={"Home | FlashCard"}/>
            <p>Home</p>
            <UserButton afterSignOutUrl="/"/>
            <UserProfile path="/user-profile" routing="path" />
        </div>
    )
};

export default Home;
