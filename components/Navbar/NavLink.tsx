import Link from "next/link";
import { NavLinkProps } from "./interfaces";

const NavLink = ({ href, title, subtitle, className }: NavLinkProps) => {
  return (
    <li
      className={`flex justify-center flex-col text-left ${
        className ? className : ""
      }`}
    >
      <Link href={href}>
        <a className="font-normal text-base">{title}</a>
      </Link>
      <Link href={href}>
        <a className="font-light text-xs">{subtitle}</a>
      </Link>
    </li>
  );
};

export default NavLink;
