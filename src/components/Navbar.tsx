import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NAVBAR_HEIGHT = 72;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const smoothScrollTo = (targetY: number, duration = 700) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const top =
      target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    smoothScrollTo(top);
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-stone-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-blue-500 font-mono font-bold text-lg tracking-tight hover:text-blue-400 transition-colors"
        >
          &lt;MB /&gt;
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-stone-500 hover:text-stone-900 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-paper/95 backdrop-blur-md border-b border-stone-200 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-stone-500 hover:text-stone-900 transition-colors font-medium"
                  onClick={(e) => {
                    handleNavClick(e, href);
                    setMenuOpen(false);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
