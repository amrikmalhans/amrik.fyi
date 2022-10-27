import { NavLinkProps } from "./interfaces";
import NavLink from "./NavLink";

const navLinks: NavLinkProps[] = [
  {
    href: "/",
    title: "Amrik Malhans",
    subtitle: "Software Engineer",
  },
  {
    href: "/about",
    title: "About",
    subtitle: "Quick Facts",
  },
  // This is to create a space between the links, a little hacky but it works (I know I could use flexbox but I'm lazy)
  {
    href: "",
    title: "",
    subtitle: "",
    // Delete it on smaller screens
    className: "hidden md:block",
  },
  {
    href: "/work-experience",
    title: "Work",
    subtitle: "3 Years Experience",
  },
  {
    href: "/journal-entries",
    title: "Thoughts",
    subtitle: "5 Journal Entries",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className={`text-sm grid grid-cols-${navLinks.length} p-5 ml-5`}>
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
