import 'server-only';
import * as mysql from "mysql2/promise";
import Query from "./Query";

export default class SqlApi {

    static SqlApi: SqlApi;

    static getInstance(): SqlApi {
        if (!SqlApi.SqlApi) {
            SqlApi.SqlApi = new SqlApi();
        }
        return SqlApi.SqlApi;
    }

    public connect(): Query {
        return new Query();
    }

    public async createConnection(): Promise<mysql.Connection> {
        const host: string | undefined = process.env.BD_HOST;
        const user: string | undefined = process.env.BD_USER;
        const password: string | undefined = process.env.BD_PASSWORD;
        const database: string | undefined = process.env.BD_DATABASE;
        const port: string | undefined = process.env.BD_PORT;

        if (!host) throw new Error("環境変数にBD_HOSTが設定されていません");
        if (!user) throw new Error("環境変数にBD_USERが設定されていません");
        if (!password) throw new Error("環境変数にBD_PASSWORDが設定されていません");
        if (!database) throw new Error("環境変数にBD_DATABASEが設定されていません");
        if (!port) throw new Error("環境変数にBD_PORTが設定されていません");

        return await mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database,
            port: Number(port),
        });
    }
}