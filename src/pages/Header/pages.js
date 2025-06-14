"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  Info,
  Package,
  MessageSquare,
  MapPin,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: <Home size={20} />,
    sizeClass: "text-base",
  },
  {
    href: "./About/page",
    label: "About us",
    icon: <Info size={20} />,
    sizeClass: "text-base",
  },
  {
    href: "/products",
    label: "Products & OEMs",
    icon: <Package size={18} />,
    sizeClass: "text-sm",
    subItems: [
      { href: "./Products/automobile", label: "Automobile" },
      { href: "/Products/automake", label: "Motorcycle" },
    ],
  },
  {
    href: "./Research/page",
    label: "R&D",
    icon: <MessageSquare size={18} />,
    sizeClass: "text-sm",
  },
  {
    href: "./Contact/page",
    label: "Contact us",
    icon: <MapPin size={20} />,
    sizeClass: "text-base",
  },
  {
    href: "/careers",
    label: "Careers",
    icon: <MapPin size={18} />,
    sizeClass: "text-sm",
  },
];

function Header() {
  const [active, setActive] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  return (
    <header className=" w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex justify-between items-center h-20 relative">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-16 sm:h-20 object-contain"
          />
        </div>

        <div className="sm:hidden z-20">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav
          className={`absolute sm:static top-20 left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow sm:shadow-none transition-all duration-300 z-10 sm:pr-4 ${
            menuOpen ? "block" : "hidden"
          } sm:block`}
        >
          <ul className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 p-6 sm:p-0 text-blue-800 font-medium">
            {navItems.map((item) => {
              const hasDropdown = !!item.subItems;

              return (
                <li
                  key={item.href}
                  className="relative group w-full sm:w-auto"
                  onMouseEnter={() => hasDropdown && setDropdownOpen(true)}
                  onMouseLeave={() => hasDropdown && setDropdownOpen(false)}
                >
                  <Link href={item.href} passHref legacyBehavior>
                    <div
                      onClick={() => {
                        if (hasDropdown && window.innerWidth < 640) {
                          setDropdownOpen(!dropdownOpen);
                        } else {
                          setActive(item.href);
                          setMenuOpen(false);
                        }
                      }}
                      className={`flex items-center gap-2 px-3 py-2 cursor-pointer select-none transition-colors duration-300 rounded-md ${
                        active === item.href ||
                        (hasDropdown &&
                          item.subItems?.some((sub) => sub.href === active))
                          ? "text-blue-700 font-semibold bg-blue-100 sm:bg-transparent"
                          : "text-gray-700 hover:text-blue-600"
                      } ${item.sizeClass}`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                      {hasDropdown && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                  </Link>

                  <span
                    className={`hidden sm:block absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                      active === item.href ||
                      (hasDropdown &&
                        item.subItems?.some((sub) => sub.href === active))
                        ? "scale-x-100"
                        : ""
                    }`}
                  ></span>

                  {hasDropdown && (
                    <ul
                      className={`sm:absolute sm:top-full sm:left-0 sm:bg-white sm:shadow-lg sm:rounded-md sm:border sm:border-gray-200 sm:min-w-[180px] sm:py-2 sm:mt-1 ${
                        dropdownOpen ? "block" : "hidden sm:group-hover:block"
                      }`}
                    >
                      {item.subItems.map((sub) => (
                        <li
                          key={sub.href}
                          onClick={() => {
                            setActive(sub.href);
                            setMenuOpen(false);
                            setDropdownOpen(false);
                          }}
                        >
                          <Link href={sub.href} passHref legacyBehavior>
                            <a
                              className={`block px-4 py-2 text-gray-700 hover:text-blue-600 text-sm whitespace-nowrap ${
                                active === sub.href
                                  ? "text-blue-600 font-semibold"
                                  : ""
                              }`}
                            >
                              {sub.label}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
