"use client"

import {Button} from "@/src/components/ui/button";
import {Sheet, SheetContent, SheetHeader, SheetTrigger} from "@/src/components/ui/sheet";
import React from "react";
import {ScrollArea} from "@/src/components/ui/scroll-area";
import {Separator} from "@/src/components/ui/separator";
import {ProjectIcon} from "@/src/components/icons/project-icon";

export function MobileSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="bg-teal-800 h-full w-12">
                    <ProjectIcon/>
                </div>
            </SheetTrigger>
            <SheetContent side='left' className="md:hidden">
                <SheetHeader className="mb-0">
                    <p className="font-bold text-left text-lg">Cardearn</p>
                    <p className="text-left">手軽に単語帳を作成し、学習の効率を高めることを目的としたサービスです。</p>
                </SheetHeader>
                <Separator className="mt-3"/>
                <div className="py-2">
                    <h2 className="mb-1 text-lg font-semibold tracking-tight">
                        メイン
                    </h2>
                    <div className="space-y-1">
                        <Button variant="secondary" className="w-full justify-start">
                            Home
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            Create
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            Search
                        </Button>
                    </div>
                </div>
                <div className="py-2">
                    <h2 className="mb-1 text-lg font-semibold tracking-tight">
                        カテゴリ
                    </h2>
                    <ScrollArea className="h-[200px]">
                        <div className="space-y-1">
                            <Button
                                variant="ghost"
                                className="w-full justify-start">
                                数学
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start">
                                国語
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start">
                                物理
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start">
                                国家資格
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start">
                                検定
                            </Button>
                        </div>
                    </ScrollArea>
                </div>
                <div className="py-2">
                    <h2 className="mb-1 text-lg font-semibold tracking-tight">
                        フォルダ
                    </h2>
                    <ScrollArea className="h-[200px]">
                        <div className="space-y-1">
                            <Button
                                variant="ghost"
                                className="w-full justify-start">
                                英検三級
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start">
                                英検準二級
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start">
                                英検二級
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start">
                                英検準一級
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start">
                                応用情報技術者試験
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start">
                                長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト
                            </Button>
                        </div>
                    </ScrollArea>
                </div>

            </SheetContent>
        </Sheet>
    );
}