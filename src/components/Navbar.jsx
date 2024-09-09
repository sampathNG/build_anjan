import logo from "../../public/logo.jpeg";
const Navbar = () => {
  return (
    <nav className="bg-indigo-950 fixed top-0 z-50 w-full">
      <div className=" mx-auto px-4 py-4 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center text-gray-400 bg-gray-800">
        <div>
          <a href="#">
            <img src={logo} alt="logo" className=" md:w-24 md:h-16 h-10 w-16" />
          </a>
        </div>
        <ul className="flex space-x-8 text-lg  lg:text-lg md:text-sm ">
          <li>
            <a href="#" className=" hover:text-white transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className=" hover:text-white transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className=" hover:text-white transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#aboutus"
              className=" hover:text-white transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className=" hover:text-white transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
