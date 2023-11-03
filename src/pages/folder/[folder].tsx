import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import {Toast} from "@radix-ui/react-toast";

const Folder: NextPage = () => {
    const router = useRouter()
    const folder: string | string[] | undefined = router.query.folder;
    if (typeof folder === "undefined") return <div>データが存在しません。</div>
    if (Array.isArray(folder)) return <div><Toast>データに不整合が生じました。</Toast></div>
    return (
        <div>
            <h1>
                {folder}'s Profile
            </h1>
            <div>
                <Toast>データに不整合が生じました。</Toast>
                welcome to {folder}'s Page
            </div>
        </div>
    )
}

export default Folder;