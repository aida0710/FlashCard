import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/src/components/ui/menubar"
import {MobileSidebar} from "@/src/components/layout/mobile-sidebar";
import {ProjectIcon} from "@/src/components/icons/project-icon";
import {UserAvatar} from "@/src/components/layout/user-avatar";
import React from "react";

export function Menu() {

    return (
        <Menubar className="rounded-none h-16 z-20 sticky top-0 border-b-[1]">
            <div className="flex flex-row w-full">
                <div className="basis-3/4 w-auto">
                    <div className="md:hidden">
                        <MobileSidebar/>
                    </div>
                    <div className="max-md:hidden">
                        <MenubarMenu>
                            <MenubarTrigger className="font-bold text-lg">
                                <div className="mr-1.5 -ml-1.5">
                                    <ProjectIcon/>
                                </div>
                                Cardearn
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>About</MenubarItem>
                                <MenubarSeparator/>
                                <MenubarItem>Help & FeedBack</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </div>
                </div>
                <div className="basis-1/4 flex justify-end">
                    <div className="m-1 mr-6 max-md:mt-2 md:mt-3.5">
                        <UserAvatar/>
                    </div>
                </div>
            </div>
        </Menubar>

    )
}
