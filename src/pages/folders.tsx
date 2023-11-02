import {NextPage} from "next";
import Link from "next/link";

const Folders:NextPage = () => {
    return (
        <div>
            <h1>Folder</h1>
            <ul>
                <li><Link href={"/folder/programming"}>プログラミングフォルダー</Link></li>
                <li><Link href={"/folder/reading"}>リーディングフォルダー</Link></li>
            </ul>
        </div>
    )
}

export default Folders;