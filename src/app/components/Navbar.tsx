"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-xl">
      <div className="page-shell">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={closeMenu} className="text-lg font-bold tracking-tight">
            <span className="text-primary">WAM</span><span className="text-[var(--muted)]">.</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm font-medium ${pathname === item.href ? "text-primary" : "text-[var(--muted)] hover:text-[var(--foreground)]"}`}
              >
                {item.label}
                {pathname === item.href && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary" />}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary px-4 py-2 text-sm">Contact</Link>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="rounded-lg p-2 text-[var(--muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="space-y-1 border-t border-[var(--border)] py-4">
                {menuItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeMenu} className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${pathname === item.href ? "bg-primary/10 text-primary" : "text-[var(--muted)]"}`}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={closeMenu} className="mt-2 block rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-semibold text-white">Contact</Link>
                <button type="button" onClick={() => { toggleTheme(); closeMenu(); }} className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm text-[var(--muted)]">
                  {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                  {theme === "dark" ? "Light theme" : "Dark theme"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
