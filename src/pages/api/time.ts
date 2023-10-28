import type {NextApiRequest, NextApiResponse} from 'next'
import SqlApi from "@/src/functions/server/sql/SqlApi";

type Data = {
    time: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.time()
    for (let i = 0; i < 10000; i++){
        SqlApi.getInstance().connect().insert("INSERT INTO `test` (`id`, `test`) VALUES (NULL, 'test');").then();
    }
    console.timeEnd()
    res.status(200).json({
        time: Date.now().toString()
    })
}
