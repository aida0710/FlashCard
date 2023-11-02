import { faker } from '@faker-js/faker';
import type {NextApiRequest, NextApiResponse} from 'next'
import SqlApi from "@/src/functions/server/sql/SqlApi";

type Data = {
    time: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const randomName: string = faker.person.firstName("male");
        let sqlApi: SqlApi;
        sqlApi = SqlApi.getInstance();
        sqlApi.connect().insert("INSERT INTO `test` (`id`, `test`) VALUES (NULL, ?)", [randomName, "tests", "333", "tes&'aa'aa"]).then();
    } catch (e) {
        console.log(e);
    }
    res.status(200).json({
        time: Date.now().toString()
    })
}
