import {NextPage} from "next";
import Link from "next/link";
import {Button} from "@nextui-org/react";
import React from "react";
import {useUser} from "@clerk/nextjs";
import {CircularProgress} from "@nextui-org/progress";
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@nextui-org/input";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup';
import {fetcha} from "@co-labo-hub/fetcha";

interface CreateFolderForm {
    folderName: string,
    folderDescription: string
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
    const {isSignedIn, user, isLoaded} = useUser();
    const [isLoading, setLoading] = React.useState(false);
    const {register, handleSubmit, formState: {errors},} = useForm<CreateFolderForm>({
        resolver: yupResolver(schema),
    });

    const [getFolders, setFolders] = React.useState<SomeItemType[]>([]);

    React.useEffect(() => {
        const responseData: any = getRequestFolders();
        responseData.then((res: any) => {
            if (res === undefined) return;
            setFolders(res);
        });
    }, [getFolders]);

    if (!isLoaded || !isSignedIn) return <CircularProgress aria-label="読み込み中... "/>;

    const onSubmit: SubmitHandler<CreateFolderForm> = async (data: CreateFolderForm) => {
        setLoading(true);
        await fetcha("/api/create_folder")
            .contentType("application/json")
            .post({
                user_id: user.id,
                folder_name: data.folderName,
                folder_description: data.folderDescription
            })
            .then((res) => {
                alert("フォルダーを作成しました。");
            });
        setLoading(false);
        await getRequestFolders();
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
                {getFolders.map((folder: SomeItemType) => {
                    return (
                        <li key={folder.id}>
                            <Link href={`/folder/${folder.folder_name}`}>{folder.folder_name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

    async function getRequestFolders() {
        try {
            const data = await fetcha("/api/get_folders")
                .contentType("application/json")
                .post({
                    user_id: 'user_2XA6l4v9NGyagiqCeR9akbai1Y7'
                })
                .then((res) => {
                    return res.json();
                });
            return data[0];
        } catch (error) {
            console.error('APIリクエストエラー:', error);
        }
    }
}

export default Folders;