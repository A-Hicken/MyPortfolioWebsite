import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-white font-semibold">Amberlie Hicken</span>

        <div className="flex gap-4 text-slate-400 text-sm">
          <a
            href="/Amberlie-Hicken-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Resume
          </a>

          <a
            href="https://github.com/A-Hicken"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/amberlie-hicken-11a122153/"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
