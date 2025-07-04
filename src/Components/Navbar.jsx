import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/how", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "BLOG" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[32px] py-4 bg-[#122315] text-[#E3DEB3] uppercase shadow-md">
      <NavLink to="/">
        <img
          src="https://cdn.prod.website-files.com/635273ea37c256ef2835d522/63f35d11461fa083cbe695de_Logo%20white.svg"
          alt="Logo"
          className="h-10 w-auto"
        />
      </NavLink>

      <ul className="flex items-center gap-8 px-4 font-semibold">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-[#B6E388] ${
                  isActive ? "text-[#B6E388] border-b-2 border-[#B6E388]" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 ">
        <button className="px-4 py-2 uppercase rounded-md border border-[#E3DEB3] text-[#E3DEB3] hover:bg-[#E3DEB3] hover:text-[#122315] transition-colors duration-200 font-semibold">
          Log In
        </button>
        <button className="px-4 py-2 uppercase rounded-md bg-[#77E46E] text-[#122315] hover:bg-[#E3DEB3] hover:text-[#122315] transition-colors duration-200 font-semibold shadow">
          Get Funding
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
