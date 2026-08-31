/**
 * Copyright (c) 2026 Daniyal.dev All rights reserved.
 */

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const navItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Work", link: "#work" },
  { label: "Reviews", link: "#reviews" },
  { label: "Contact", link: "#contact", mobileOnly: true },
];

const Navbar = ({ isOpen }) => {
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const [activeLink, setActiveLink] = useState(
    () => (window.location.hash === "#contact" ? "#home" : window.location.hash || "#home"),
  );

  useEffect(() => {
    const syncActiveLink = () => {
      if (window.location.hash !== "#contact") {
        setActiveLink(window.location.hash || "#home");
      }
    };

    window.addEventListener("hashchange", syncActiveLink);
    return () => window.removeEventListener("hashchange", syncActiveLink);
  }, []);

  const positionActiveBox = useCallback((link) => {
    if (!activeBox.current || !navRef.current || !link) return;

    if (navRef.current.offsetParent === null) {
      activeBox.current.style.opacity = "0";
      return;
    }

    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    activeBox.current.style.top = `${linkRect.top - navRect.top}px`;
    activeBox.current.style.left = `${linkRect.left - navRect.left}px`;
    activeBox.current.style.width = `${linkRect.width}px`;
    activeBox.current.style.height = `${linkRect.height}px`;
    activeBox.current.style.opacity = "1";
  }, []);

  useLayoutEffect(() => {
    const link = linkRefs.current[activeLink];
    if (!link) return;

    lastActiveLink.current?.classList.remove("active");
    link.classList.add("active");
    lastActiveLink.current = link;
    positionActiveBox(link);

    const handleResize = () => positionActiveBox(link);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [activeLink, isOpen, positionActiveBox]);

  const activeCurrentLink = (event, link) => {
    lastActiveLink.current?.classList.remove("active");
    event.currentTarget.classList.add("active");
    lastActiveLink.current = event.currentTarget;
    setActiveLink(link);
    positionActiveBox(event.currentTarget);

    if (import.meta.env.DEV) {
      console.log(event.currentTarget);
    }
  };

  return (
    <nav
      id="main-navigation"
      aria-label="Main navigation"
      ref={navRef}
      className={`${isOpen ? "block" : "hidden"} absolute right-0 top-12 w-52 rounded-2xl border border-zinc-700/60 bg-zinc-900/95 p-2 shadow-2xl backdrop-blur-xl md:relative md:right-auto md:top-auto md:block md:w-auto md:rounded-xl md:border-zinc-700/60 md:bg-zinc-800/70 md:px-1 md:py-1 md:shadow-lg md:backdrop-blur-xl`}
    >
      <span
        aria-hidden="true"
        ref={activeBox}
        className="pointer-events-none absolute z-0 rounded-lg bg-white shadow-sm transition-[top,left,width,height] duration-300 ease-out"
      />
      <div className="relative z-10 flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-2">
        {navItems.map(({ label, link, mobileOnly }) => (
          <a
            href={link}
            key={link}
            ref={(element) => {
              linkRefs.current[link] = element;
            }}
            className={`${mobileOnly ? "md:hidden" : ""} nav-link w-fit cursor-pointer whitespace-nowrap rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50 md:px-4 md:py-2.5 ${activeLink === link ? "text-zinc-900" : "text-zinc-300 hover:text-white"}`}
            aria-current={activeLink === link ? "page" : undefined}
            onClick={(event) => activeCurrentLink(event, link)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
