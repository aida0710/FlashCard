import type {NextPage} from 'next'
import {useRouter} from 'next/router'

const Folder: NextPage = () => {
    const router = useRouter()
    const folder: string | string[] | undefined = router.query.folder;
    if (typeof folder === "undefined") return <div>loading...</div>
    if (Array.isArray(folder)) return <div>データに不整合が生じました。</div>

    return (
        <div>
            <h1>
                {folder}'s item
            </h1>
            <div>
                welcome to {folder}'s Page
            </div>
        </div>
    )
}

export default Folder;