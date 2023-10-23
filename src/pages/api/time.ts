import type {NextApiRequest, NextApiResponse} from 'next'
import SqlApi from "@/src/server/sql/SqlApi";

type Data = {
    time: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    SqlApi.getInstance().connect().insert("INSERT INTO `test` (`id`, `name`) VALUES (NULL, 'test');").then();
    res.status(200).json({
        time: Date.now().toString()
    })
}
