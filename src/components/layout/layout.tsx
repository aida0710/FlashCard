import React from "react";
import {Menu} from "@/src/components/layout/menu";
import {Sidebar} from "@/src/components/layout/sidebar";

interface Props {
    children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
    return (
        <div>
            <Menu/>
            <div className="flex">
                <Sidebar className='max-md:hidden'/>
                <div className="h-full px-4 py-6 lg:px-8">
                    {children}
                </div>
            </div>
        </div>
    );
};