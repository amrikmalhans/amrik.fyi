const Header = () => {
  return (
    <header className="m-10">
      <h1 className="text-5xl w-8/12 mb-5 text-left font-md font-Raleway">
        Hi, I am Amrik Malhans, a software engineer specializing in web.
        <br />
      </h1>
      <h2 className="text-xl w-8/12 text-left font-normal font-Raleway text-gray-500">
        I am currently working at{" "}
        <a
          href="https://brookbushinstitute.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Brookbush Institute
        </a>{" "}
        as a Full Stack Developer. I am also a student at{" "}
        <a
          href="https://www.tru.ca/science/programs/compsci/programs/cs_bachelor_of_computing_science.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Thompson Rivers University
        </a>{" "}
        in the Computer Science program to obtain my Bachelor&apos;s Degree.
        Specialized in building Backend insfrastucture and APIs, I am also
        experienced in building Frontend applications using React and Next.js.
      </h2>
    </header>
  );
};

export default Header;
