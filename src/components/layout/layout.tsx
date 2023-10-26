import React from "react";
import {MainNav} from "@/src/components/layout/main-nav";
import {UserNav} from "@/src/components/layout/user-nav";
import { Separator } from "@/src/components/ui/separator";
import {SidebarNav} from "@/src/components/layout/sidebar-nav";

const sidebarNavItems = [
    {
        title: "Profile",
        href: "/",
    },
    {
        title: "Account",
        href: "/",
    },
    {
        title: "Appearance",
        href: "/",
    },
    {
        title: "Notifications",
        href: "/",
    },
    {
        title: "Display",
        href: "/",
    },
];

interface Props {
    children: React.ReactNode;
}

export const Layout = ({children}: Props) => {

    return (
        <div className="flex-col">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6"/>
                    <div className="ml-auto flex items-center space-x-4">
                        <UserNav/>
                    </div>
                </div>
            </div>
            <div className="hidden space-y-6 p-10 pb-16 md:block">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                    <p className="text-muted-foreground">
                        Manage your account settings and set e-mail preferences.
                    </p>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:max-w-2xl">{children}</div>
                </div>
            </div>
        </div>
);
};
