import {NextPage} from "next";
import Link from "next/link";
import {Button} from "@nextui-org/react";
import React from "react";
import SendApiRequest from "@/src/functions/client/SendApiRequest";
import ApiRequestType from "@/src/functions/client/apiRequestType";
import {useUser} from "@clerk/nextjs";
import {CircularProgress} from "@nextui-org/progress";
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@nextui-org/input";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup';
import {fetcha, FetchaError} from "@co-labo-hub/fetcha";

interface CreateFolderForm {
    folderName: string,
    folderDescription: string
}

interface ApiRequestArrayType {
    data: SomeItemType[];
}

interface SomeItemType {
    id: string,
    user_id: string,
    folder_name: string,
    folder_description: string,
}

const schema = yup.object({
    folderName: yup
        .string()
        .required('必須項目です'),
    folderDescription: yup
        .string()
        .required('必須項目です'),
})

const Folders: NextPage = () => {
    const [getFolders, setFolders] = React.useState<string | undefined>(undefined);
    const {isSignedIn, user, isLoaded} = useUser();
    const [isLoading, setLoading] = React.useState(false);
    const {register, handleSubmit, formState: {errors},} = useForm<CreateFolderForm>({
        resolver: yupResolver(schema),
    });

    React.useEffect(() => {
        getRequestFolders();
    }, []);

    if (!isLoaded || !isSignedIn) return <CircularProgress aria-label="読み込み中... "/>;

    const onSubmit: SubmitHandler<CreateFolderForm> = async (data: CreateFolderForm) => {
        setLoading(true);
        const res = await SendApiRequest(
            ApiRequestType.SQL_INSERT,
            "/api/create_folder",
            "token",
            {
                user_id: user.id,
                folder_name: data.folderName,
                folder_description: data.folderDescription
            }
        )
        setLoading(false);
    }

    return (
        <div>
            <h1>Folder</h1>
            <div className="w-unit-9xl">
                <Input
                    {...register("folderName")}
                    label="フォルダー名"
                    errorMessage={'folderName' in errors}
                    isRequired
                />
                <Input
                    {...register("folderDescription")}
                    label="フォルダーの説明"
                    errorMessage={'folderDescription' in errors}
                    isRequired
                />
                <Button
                    onClick={handleSubmit(onSubmit)}
                    disabled={isLoading}
                >フォルダー作成</Button>
            </div>
            <ul>
                {}
                <li><Link href={"/folder/programming"}>プログラミングフォルダー</Link></li>
                <li><Link href={"/folder/reading"}>リーディングフォルダー</Link></li>
            </ul>
        </div>
    )

    async function getRequestFolders() {
        try {
            let response = await SendApiRequest(
                ApiRequestType.SQL_SELECT,
                "/api/get_folders",
                "token",
                {
                    user_id: 'user_2XA6l4v9NGyagiqCeR9akbai1Y7'
                }
            );
            if (response === undefined) return;
            const data: ApiRequestArrayType = await response.json();
            console.log(data[0]);
        } catch (error) {
            console.error('APIリクエストエラー:', error);
        }
    }
}

export default Folders;