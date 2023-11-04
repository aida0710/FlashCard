import type {NextApiRequest, NextApiResponse} from 'next'
import SqlApi from "@/src/functions/server/sql/SqlApi";

interface Data {
    userID: string;
    folderName: string;
    folderDescription: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        if (req.method !== "POST") return res.status(405).end();
        let body = req.body;

        const sqlApi = SqlApi.getInstance();
        sqlApi.connect().insert("insert into folder (user_id, folder_name, folder_description) values (?,?,?);", [body['user_id'], body['folder_name'], body['folder_description']]).then();
    } catch (e) {
        console.log(e);
    }
    res.status(200).end();
}
