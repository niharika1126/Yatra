import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-16 bg-primary flex items-center justify-center ">
      <div className="w-mainwidth flex items-center justify-between ">
        <div className="flex items-center gap-4 py-8 text-white">
          <img
            src={logo}
            alt="logo"
            className="h-8 hover:cursor-pointer transition-transform duration-200 hover:scale-105"
          />
          <p className="text-2xl font-semibold hidden md:block hover:cursor-pointer hover:text-secondary transition-colors duration-200">
            Persperence
          </p>
        </div>

        {/* Right side - Navigation Links and Register Button */}
        <div className="flex items-center xl:gap-16 md:gap-4 gap-8 ">
          {/* Navigation Links */}
          <div className="flex items-center xl:gap-12 gap-6  py-8 text-white">
            <a
              href="/about"
              className="text-lg font-bold hover:text-secondary transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/blog"
              className="text-lg font-bold hover:text-secondary transition-colors duration-200"
            >
              Blog
            </a>
            <a
              href="/careers"
              className="text-lg font-bold hover:text-secondary transition-colors duration-200"
            >
              Careers
            </a>
            <a
              href="/contact"
              className="text-lg font-bold hover:text-secondary transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Register Button */}
          <div className="py-8 ml-16">
            <p className="px-4 py-2 rounded-lg bg-secondary font-semibold text-white hover:cursor-pointer hover:bg-secondary-dark transition-colors duration-200">
              Register
            </p>
          </div>
        </div>
      </div>
      {/* Left side - Logo and Brand */}
    </nav>
  );
}
