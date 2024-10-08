import React, { useEffect, useState } from "react";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  // state for window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect for window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Call handleResize once to set initial class
    handleResize();
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let offsetY = 50;

  useEffect(() => {
    const handleNavBar = () => {
      let currScroll = window.scrollY;
      if (currScroll > offsetY) {
        setToggleNav(true);
      } else {
        setToggleNav(false);
      }
    };

    window.addEventListener("scroll", handleNavBar);
    handleNavBar();

    return () => {
      window.removeEventListener("scroll", handleNavBar);
    };
  }, []);

  const searchYahoo = (event) => {
    event.preventDefault(); // Prevent form from submitting
    const query = document.getElementById("searchQuery").value;
    const url = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
    window.location.href = url;
  };

  return (
    <header className="fixed w-screen z-[999] h-[70px] top-0">
      <nav
        className={`${
          toggleNav ? "bg-black" : "bg-[#00000065]"
        } flex justify-between h-full shadow-[0_1px#d1d1d1] transition duration-500`}
      >
        <div className="flex justify-center h-full w-[15%] shadow-[1px_0#d1d1d1]">
          <a
            href="/"
            className="flex flex-col justify-center items-center w-full h-full "
          >
            <span className="w-full text-center text-2xl font-normal whitespace-nowrap text-white">
              NATURE CALLZ
            </span>
          </a>
        </div>
        
        <div className="flex items-center w-[30%]">
          <form onSubmit={searchYahoo} className="w-full">
            <label
              htmlFor="searchQuery"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="searchQuery"
                className="block w-full p-4 ps-10 font-light tracking-wider text-lg text-white bg-transparent  outline-none placeholder:text-white"
                placeholder="Search Yahoo to help nature..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="hidden justify-between items-center w-auto lg:flex">
          <ul className="flex flex-col mt-4 font-normal lg:flex-row lg:mt-0 h-full">
            <a
              href="/"
              className="text-white h-full shadow-[0_0_0_1px#d1d1d1] hover:bg-black/30 transition duration-300"
              aria-current="page"
            >
              <li className="px-8 h-full text-lg flex flex-col justify-center">
                Home
              </li>
            </a>
            <a
              href="/about"
              className="text-white h-full shadow-[1px_0#d1d1d1] hover:bg-black/30 transition duration-300"
              aria-current="page"
            >
              <li className="px-8 h-full text-lg flex flex-col justify-center" >
                About
              </li>
            </a>
            <a
              href="/contact"
              className="text-white h-full shadow-[1px_0#d1d1d1] hover:bg-black/30 transition duration-300"
              aria-current="page"
            >
              <li className="px-8 h-full text-lg flex flex-col justify-center">
                Contact
              </li>
            </a>
            <a
              href="/PrivacyPolicy"
              className="text-white h-full shadow-[1px_0#d1d1d1] hover:bg-black/30 transition duration-300"
              aria-current="page"
            >
              <li className="px-8 h-full text-lg flex flex-col justify-center">
                Privacy Policy
              </li>
            </a>
            <a
              href="#"
              className="text-white h-full shadow-[1px_0#d1d1d1] hover:bg-black/30 transition duration-300"
              aria-current="page"
            >
              <li className="px-8 h-full text-lg flex flex-col justify-center">
                Terms of Use
              </li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
