/**
 * Copyright (c) 2026 Daniyal.dev All rights reserved.
 */

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-20 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between px-4 md:grid md:grid-cols-[1fr_auto_1fr] md:px-6">
        <h1 className="shrink-0">
          <a href="#home" className="logo block" aria-label="Daniyal Ali home">
            <img
              className="h-8 w-8 md:h-10 md:w-10"
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="Daniyal Ali"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            type="button"
            className="menu-btn grid md:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="main-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="material-symbols-rounded" aria-hidden="true">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar isOpen={isMenuOpen} />
        </div>

        <a
          href="#contact"
          className="hidden justify-self-end rounded-lg border border-white bg-white px-4 py-2 text-xs font-medium text-zinc-900 transition-colors hover:border-zinc-200 hover:bg-zinc-100 md:inline-flex"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
