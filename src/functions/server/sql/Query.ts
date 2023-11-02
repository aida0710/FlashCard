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

    private async execute(query: string, variables: string[]): Promise<any> {
        const connection: Connection = await this.connectionCheck().then();
        const safeVariables: string[] = variables.map((variable: string) => connection.escape(variable))
        return connection.query(query, safeVariables);
    }

    public async insert(query: string, variables: string[]): Promise<any> {
        return await this.execute(query, variables);
    }

    public async select(query: string, variables: string[]): Promise<any> {
        return await this.execute(query, variables);
    }

    public async update(query: string, variables: string[]): Promise<any> {
        return await this.execute(query, variables);
    }

    public async delete(query: string, variables: string[]): Promise<any> {
        return await this.execute(query, variables);
    }

    public async query(query: string, variables: string[]): Promise<any> {
        return await this.execute(query, variables);
    }
}