import type {NextApiRequest, NextApiResponse} from 'next'
import SqlApi from "@/src/functions/server/sql/SqlApi";

interface Data {
    userID: string;
    folderName: string;
    folderDescription: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        if (req.method !== "POST") return res.status(405).end();
        let body = req.body;

        const sqlApi = SqlApi.getInstance();
        let result = await sqlApi.connect().select("select * from folder where user_id = ?", [body['user_id']]).then();
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
    }
    res.status(200).end();
}
