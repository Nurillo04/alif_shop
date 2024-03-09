'use client';
import { logo } from '@/assets';
import catalogState from '@/store/catalog';
import useTheme from '@/store/useTheme';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import Catalog from './Catalog';

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
          <Button onClick={toggleCatalog}>Catalog</Button>
          <Button onClick={toggleTheme}>Dark / Light</Button>
        </div>
      </div>
      {/* catalog */}
      {openCatalog && <Catalog />}
    </>
  );
};

export default Header;
