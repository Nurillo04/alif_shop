"use client";

import { dark, heart, logo, savat } from "@/assets/index";
import catalogState from "@/store/catalog";
import useTheme from "@/store/useTheme";
import { Button } from "flowbite-react";
import Image from "../../node_modules/next/image";
// import Image from "next/image";
import Link from "../../node_modules/next/link";
// import Link from "next/link";
import Catalog from "./Catalog";

const Header = () => {
  const { toggleTheme } = useTheme();
  const { openCatalog, toggleCatalog } = catalogState();
  return (
    <>
      <div className="h-[75px] fixed top-0 left-0 right-0 bg-white z-10 py-4">
        <div className="container mx-auto flex justify-between">
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-[112px] h-[32px]" />
          </Link>
          <Button
            onClick={toggleCatalog}
            className="w-[165px] h-[45px] bg-yellow-500 rounded-lg flex justify-around items-center"
          >
            <i className="bx bx-menu"></i>
            Tovarlar Katalogi
          </Button>
          <input
            type="search"
            className="h-[45px] rounded-lg w-[400px] border-2 pl-[10px] border-yellow-400"
            placeholder="Tovarlar izlash"
          />
          <div className="flex justify-between items-center gap-x-[20px] ">
            <button className="h-[45px] flex flex-col items-center justify-around hover:text-yellow-300">
              <Image src={savat} alt="savat" />
              <p className="text-[11px]">Savat</p>
            </button>
            <button className="h-[45px] flex flex-col items-center justify-around hover:text-yellow-300">
              <Image src={heart} alt="rasm" />
              <p className="text-[11px]">Saralanganlar</p>
            </button>
            <button className="border border-yellow-400 h-[45px] rounded-lg pl-[10px] pr-[10px] hover:bg-yellow-300">
              Krish
            </button>
            <Button onClick={toggleTheme}>
              <Image src={dark} alt="dark" />
            </Button>
          </div>
        </div>
      </div>
      {/* catalog */}
      {openCatalog && <Catalog />}
    </>
  );
};

export default Header;
