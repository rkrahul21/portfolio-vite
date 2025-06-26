const Header = () => {
  return (
    <header className="w-full h-[70px]  text-white shadow-md fixed top-0 z-50 mb-200">
      <div className="flex justify-between items-center px-8 lg:px-16 h-full">
        {/* Logo */}
        <div className="text-2xl font-bold font-serif">
          <span className="text-white">RK</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="/" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="/about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="/projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="/services" className="hover:text-blue-400 transition">
            Services
          </a>
          <a href="#resume" className="hover:text-blue-400 transition">
            Resume
          </a>
        </nav>

        {/* Contact Button */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block border border-blue-400 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition"
            onClick={() => window.location.href = '/contact'}>
            Contact Me
          </button>

          {/* Theme Toggle Icon */}
          <button className="text-white text-xl hover:text-blue-400 transition">
            <i className="fas fa-sun"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;