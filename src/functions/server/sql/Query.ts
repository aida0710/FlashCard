import 'server-only';
import SqlApi from "@/src/functions/server/sql/SqlApi";
import * as mysql from "mysql2/promise";
import {Connection} from "mysql2/promise";

export default class Query {
    private static connection: Promise<mysql.Connection> | undefined;

    private connectionCheck(): Promise<mysql.Connection> {
        if (!Query.connection) {
            console.info("connectionがundefinedの為、接続します。");
            Query.connection = SqlApi.getInstance().createConnection();
        }
        if (!Query.connection) throw new Error("connectionがundefinedです");
        return Query.connection;
    }

    private async execute(query: string): Promise<any> {
        const connection: Connection = await this.connectionCheck().then();
        return connection.query(query);
    }

    public async insert(query: string): Promise<any> {
        return await this.execute(query);
    }

    public async select(query: string): Promise<any> {
        return await this.execute(query);
    }

    public async update(query: string): Promise<any> {
        return await this.execute(query);
    }

    public async delete(query: string): Promise<any> {
        return await this.execute(query);
    }

    public async query(query: string): Promise<any> {
        return await this.execute(query);
    }
}