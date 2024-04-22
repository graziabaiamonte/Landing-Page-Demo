import { NAV_LINKS } from "@/constants"
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 "> 
    
      <Link href="/">
        <Image src="../public/logo.png" alt="logo" width={74} height={29}/>
      </Link>

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
