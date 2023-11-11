import ApiRequestType from "@/src/functions/client/apiRequestType";

/**
 * 内部にRequestを送信する為の関数
 * @param type
 * @param url
 * @param token
 * @param content
 * @constructor
 */
export default async function SendApiRequest(type: ApiRequestType, url: string, token: string, content: any): Promise<Response | undefined> {
    try {
        const response: Response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(
                    content,
                ),
                headers: {
                    authorization: token,
                    'Content-Type': 'application/json',
                },
            }
        );
        if (response.status !== 200) console.error('GETリクエストが失敗しました');
        return response;
    } catch (error) {
        console.error(error);
    }
}