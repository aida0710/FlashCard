import {Button} from "@/src/components/ui/button"
import {ScrollArea} from "@/src/components/ui/scroll-area"

import React from "react";

export function Sidebar({className}: { className?: string }) {
    return (
        <div className={className}>
            <div className="h-fit z-10 sticky top-16 w-[280px]">
                <div className="space-y-4 py-4">
                    <div className="px-3 py-2">
                        <h2 className="mb-1 px-4 text-lg font-semibold tracking-tight">
                            メイン
                        </h2>
                        <div className="space-y-1 ml-5">
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
                    <div className="px-3 py-2">
                        <h2 className="mb-1 px-4 text-lg font-semibold tracking-tight">
                            カテゴリ
                        </h2>
                        <ScrollArea className="h-[200px]">
                            <div className="space-y-1 ml-5">
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start">
                                    英語
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start">
                                    国語
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start">
                                    国家資格
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start">
                                    数学
                                </Button>
                            </div>
                        </ScrollArea>
                    </div>
                    <div className="px-3 py-2">
                        <h2 className="mb-1 px-4 text-lg font-semibold tracking-tight">
                            フォルダ
                        </h2>
                        <ScrollArea className="h-[200px]">
                            <div className="space-y-1 ml-5">
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
                                    長文テスト長文テスト長文テスト
                                </Button>
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </div>
    )
}
