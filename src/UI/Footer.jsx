import { BsCodeSlash } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-8 flex items-center gap-1">
      <BsCodeSlash />{" "}
      <span className="year"> {new Date().getFullYear()} by </span>
      <a
        rel="noreferrer"
        target="_blank"
        className="text-teal-200"
        href="https://www.linkedin.com/in/ahmed-ayman-723605229/"
      >
        Ahmed Ayman
      </a>
    </footer>
  );
};

export default Footer;
