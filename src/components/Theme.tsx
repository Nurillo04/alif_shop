"use client";
import { ReactNode } from "react";
import useTheme from "@/store/useTheme";

const Theme = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:bg-gray-700 dark:text-white">
        {children}
      </div>
    </div>
  );
};

export default Theme;
