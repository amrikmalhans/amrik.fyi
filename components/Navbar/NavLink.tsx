import Link from "next/link";
import { NavLinkProps } from "./interfaces";

const NavLink = ({ href, title, subtitle, className }: NavLinkProps) => {
  return (
    <li className={`flex justify-center flex-col ${className}`}>
      <Link href={href}>{title}</Link>
      <Link href={href}>{subtitle}</Link>
    </li>
  );
};

export default NavLink;
