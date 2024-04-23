'use client'
import { NAV_LINKS } from "@/constants"
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
};

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 "> 
    
      <Link href="/">
        <Image src="/Landing-page-demo/logo.png" alt="logo" width={74} height={29}  priority/>
      </Link>

      <div className="header-mobile" onClick={handleClick}>

          <Image
            src="/Landing-page-demo/burger-menu.svg" 
            alt="hamburger menu"
            width={24}
            height={24}
          />

          {isOpen && (
          <ul className="flex flex-col fontHeader uppercase menuMobile">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="regular-16 text-white cursor-pointer pb-1.5 transition-all hover:font-bold">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        )}

      </div>

      <ul className="hidden h-full gap-12 lg:flex fontHeader uppercase">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-white 
          flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="LOGIN"
          variant="btn_navbar"
        />
      </div>

    </nav>
  )
}

export default Navbar


