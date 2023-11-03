"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "@nextui-org/react";
import { UseThemeProps } from "next-themes/dist/types";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export function ThemeButton() {
  const { setTheme, theme }: UseThemeProps = useTheme();

  const handleSetTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
      <Button
        className="block p-2"
        radius="full"
        variant="ghost"
        onClick={handleSetTheme}
        isIconOnly
      >
        {theme === "light" ? (
          <BsFillMoonStarsFill className="w-full h-full" />
        ) : (
          <BsFillSunFill className="w-full h-full" />
        )}
      </Button>
  );
}
