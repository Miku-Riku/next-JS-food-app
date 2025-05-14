import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.png";
import classes from "./MainHeader.module.css";
import MainHeaderBackground from "@/components/MainHeaderBackground";

import NavLink from "./nav-link/navLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            className={classes.logoImg}
            src={LogoImg}
            alt="Logo"
            priority
          ></Image>
          My Food App
        </Link>
        <ul className={classes.menu}>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Explore Community</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}
