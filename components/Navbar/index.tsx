import Link from "next/link";
import { NavLinkProps } from "./interfaces";
import NavLink from "./NavLink";

const navLinks: NavLinkProps[] = [
  {
    href: "/",
    title: "Home",
    subtitle: "Welcome to my website",
  },
  {
    href: "/",
    title: "Home",
    subtitle: "Welcome to my website",
  },
  // This is to create a space between the links, a little hacky but it works (I know I could use flexbox but I'm lazy)
  {
    href: "",
    title: "",
    subtitle: "",
  },
  {
    href: "/",
    title: "Home",
    subtitle: "Welcome to my website",
  },
  {
    href: "/",
    title: "Home",
    subtitle: "Welcome to my website",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className={`text-sm grid grid-cols-${navLinks.length}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.title}
            href={link.href}
            title={link.title}
            subtitle={link.subtitle}
            className={link?.className}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
