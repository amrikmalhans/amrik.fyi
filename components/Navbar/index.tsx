import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="text-sm grid grid-cols-5">
        <li>
          <Link href="/">Amrik Malhans</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li className="Empty"></li>
        <li>
          <Link href="/">Work Experience</Link>
        </li>
        <li>
          <Link href="/">Thoughts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
