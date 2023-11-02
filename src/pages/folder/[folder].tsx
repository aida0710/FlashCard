import type {NextPage} from 'next'
import {useRouter} from 'next/router'

const Folder: NextPage = () => {
    const router = useRouter()
    const folder: string | string[] | undefined = router.query.folder;
    if (typeof folder === "undefined") return <div>データが存在しません。</div>
    if (Array.isArray(folder)) return <div>配列の為エラーが発生しました</div>
    return (
        <div>
            <h1>
                {folder}'s Profile
            </h1>
            <div>
                welcome to {folder}'s Page
            </div>
        </div>
    )
}

export default Folder;