import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router";
import {
  Home,
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  Menu,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../../provider/page";
import { useTranslation } from "react-i18next";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { id: "home", icon: Home, text: t("nav.home"), path: "/" },
    { id: "skills", icon: Code, text: t("nav.skills"), path: "/skills" },
    {
      id: "experience",
      icon: Briefcase,
      text: t("nav.experience"),
      path: "/experience",
    },
    {
      id: "education",
      icon: GraduationCap,
      text: t("nav.education"),
      path: "/education",
    },
    { id: "contact", icon: Mail, text: t("nav.contact"), path: "/contact" },
  ];

  const langLabel = i18n.language === "en" ? "FR" : "EN";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${theme === "dark" ? "bg-[#090F1C]/95" : "bg-white/95"
        } backdrop-blur-md md:bg-transparent md:backdrop-blur-none`}
    >
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav
            className={`${theme === "dark" ? "bg-[#090F1C]/90" : "bg-white/90"
              } backdrop-blur-md md:rounded-full px-2 md:px-6 py-2.5 max-w-[100vw] overflow-x-auto overflow-y-hidden`}
          >
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <Link
                to="/"
                className={`${theme === "dark" ? "text-white" : "text-gray-900"
                  } font-bold`}
              >
                Portfolio
              </Link>
              <div className="flex items-center gap-2">
                {/* Language toggle — mobile */}
                <button
                  onClick={toggleLanguage}
                  className={`${theme === "dark" ? "text-white" : "text-gray-900"
                    } p-2 text-xs font-bold tracking-widest`}
                >
                  {langLabel}
                </button>
                <button
                  onClick={toggleTheme}
                  className={`${theme === "dark" ? "text-white" : "text-gray-900"
                    } p-2`}
                >
                  {theme === "dark" ? (
                    <Sun
                      size={26}
                      className="hover:text-yellow-400 transition-colors"
                    />
                  ) : (
                    <Moon
                      size={26}
                      className="hover:text-blue-400 transition-colors"
                    />
                  )}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`${theme === "dark" ? "text-white" : "text-gray-900"
                    } p-2`}
                >
                  <Menu
                    size={26}
                    className="hover:scale-110 transition-transform"
                  />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-2 lg:px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-xs md:text-sm font-medium
                      transition-all duration-300 flex items-center gap-1.5 md:gap-2
                      hover:bg-${theme === "dark" ? "white" : "gray-900"}/10 
                      ${activeLink === id
                        ? `bg-${theme === "dark" ? "white" : "gray-900"}/15 ${theme === "dark" ? "text-white" : "text-gray-900"
                        }`
                        : `${theme === "dark"
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                        }`
                      }
                    `}
                  >
                    <Icon
                      className={`w-[18px] h-[18px] md:w-5 md:h-5 ${activeLink === id ? "scale-110" : ""
                        } hover:scale-110 transition-transform`}
                    />
                    <span className="inline">{text}</span>
                  </Link>
                ))}

                {/* Desktop: theme + language toggles */}
                <button
                  onClick={toggleTheme}
                  className={`hidden md:flex px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                    transition-all duration-300 items-center gap-2 ${theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                    } hover:bg-${theme === "dark" ? "white" : "gray-900"}/10`}
                >
                  {theme === "dark" ? (
                    <Sun
                      size={22}
                      className="hover:text-yellow-400 transition-colors"
                    />
                  ) : (
                    <Moon
                      size={22}
                      className="hover:text-blue-400 transition-colors"
                    />
                  )}
                </button>

                <button
                  onClick={toggleLanguage}
                  className={`hidden md:flex px-3 py-1.5 rounded-full text-xs font-bold tracking-widest border transition-all duration-300
                    ${theme === "dark"
                      ? "border-white/20 text-gray-300 hover:text-white hover:bg-white/10"
                      : "border-black/20 text-gray-600 hover:text-gray-900 hover:bg-black/10"
                    }`}
                >
                  {langLabel}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
