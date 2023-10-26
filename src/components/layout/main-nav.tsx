import Link from "next/link"

import {cn} from "@/src/functions/client/utils"
import React from "react";
import Image from "next/image";
import {Button} from "@/src/components/ui/button";

export function MainNav({
                            className,
                            ...props
                        }: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Image
                src="https://wfiot2018.iot.ieee.org/files/2016/01/sample-logo@2x.png"
                width={100}
                height={100}
                alt="Dashboard"
                className="block dark:hidden"
            />
            <Image
                src="https://wfiot2018.iot.ieee.org/files/2016/01/sample-logo@2x.png"
                width={100}
                height={100}
                alt="Dashboard"
                className="hidden dark:block"
            />

            <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                <Button variant='ghost'>
                    Home
                </Button>
            </Link>
            <Link
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                <Button variant='ghost'>
                    Category
                </Button>
            </Link>
            <Link
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                <Button variant='ghost'>
                    About
                </Button>
            </Link>
            <Link
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                <Button variant='ghost'>
                    Settings
                </Button>
            </Link>
        </nav>
    )
}
