import type {NextPage} from 'next'
import {useRouter} from 'next/router'

const Folder: NextPage = () => {
    const router = useRouter()
    const folder: string | string[] | undefined = router.query.folder;
    if (typeof folder === "undefined") return <div>loading...</div>
    if (Array.isArray(folder)) return <div>データに不整合が生じました。</div>

    return (
        <div>
            <h1 className="text-lg font-bold">{folder} フォルダーを選択中...</h1>
        </div>
    )
}

export default Folder;