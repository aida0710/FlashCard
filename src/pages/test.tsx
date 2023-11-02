import {getPosts} from "@/src/functions/server/functions";
import {NextPage} from "next";

const Test: NextPage = async () => {
    const data = await getPosts();
    console.log(data);

    return (
        <div>
            <h1>ApiTest</h1>

        </div>
    )

}
export default Test;