"use client";
import { Button, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import React from "react";
import { ProjectIcon } from "@/src/components/icons/project-icon";
import { BsGithub } from "react-icons/bs";
import { ThemeButton } from "@/src/components/layout/theme-button";
import { Tooltip } from "@nextui-org/tooltip";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navbar isBordered>
        <NavbarBrand>
          <ProjectIcon />
          <p className="ml-5 font-bold text-inherit text-large">Profile</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <ThemeButton />
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
}
