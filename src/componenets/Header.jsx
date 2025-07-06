// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="w-full h-[70px] bg-[#0a192f] text-white shadow-md fixed top-0 z-50">
//       <div className="flex justify-between items-center px-8 lg:px-16 h-full">
//         {/* Logo */}
//         <div className="text-2xl font-bold font-serif">
//           <span className="text-white">RK</span>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex gap-8 text-sm font-medium">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 transition"
//                 : "hover:text-blue-400 transition"
//             }
//             end
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 transition"
//                 : "hover:text-blue-400 transition"
//             }
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/projects"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 transition"
//                 : "hover:text-blue-400 transition"
//             }
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/services"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 transition"
//                 : "hover:text-blue-400 transition"
//             }
//           >
//             Services
//           </NavLink>
//           <a href="#resume" className="hover:text-blue-400 transition">
//             Resume
//           </a>
//         </nav>

//         {/* Contact Button */}
//         <div className="flex items-center gap-4">
//           <button
//             className="hidden md:block border border-blue-400 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition"
//             onClick={() => window.location.href = '/contact'}
//           >
//             Contact Me
//           </button>

//           {/* Theme Toggle Icon */}
//           <button className="text-white text-xl hover:text-blue-400 transition">
//             <i className="fas fa-sun"></i>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



//2nd version with modal for project details


import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-[70px] bg-[#0a192f] text-white shadow-md fixed top-0 z-50">
      <div className="flex justify-between items-center px-8 lg:px-16 h-full">
        {/* Logo */}
        <div className="text-2xl font-bold font-serif">
          <span className="text-white">RK</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
        
        {/* Navigation Links */}
        <nav className={`md:flex gap-8 text-sm font-medium ${isMenuOpen ? "flex" : "hidden"} md:static absolute bg-[#0a192f] w-full top-[70px] left-0 md:w-auto md:bg-transparent transition-all duration-300 flex-col md:flex-row`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 transition"
                : "hover:text-blue-400 transition"
            }
            end
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 transition"
                : "hover:text-blue-400 transition"
            }
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 transition"
                : "hover:text-blue-400 transition"
            }
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Projects
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 transition"
                : "hover:text-blue-400 transition"
            }
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Services
          </NavLink>
          <a
            href="#resume"
            className="hover:text-blue-400 transition"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Resume
          </a>
        </nav>
      {/* Contact Button */}
      <div className="flex items-center gap-4 md:static absolute right-8 top-[70px] md:top-0">
        <button
          className="hidden md:block border border-blue-400 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Me
        </button>

        {/* Theme Toggle Icon */}
        <button className="text-white text-xl hover:text-blue-400 transition">
          <i className="fas fa-sun">toggle</i>
        </button>
      </div>
      </div>

    </header>
  );
};

export default Header;
