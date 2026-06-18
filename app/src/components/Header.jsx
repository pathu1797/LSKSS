"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Menu,
  X,
  Music,
  Globe,
  ExternalLink,
  Share2,
} from "lucide-react";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academy", label: "Academy" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full z-30 sticky top-0">
      <div className="bg-[var(--dark-brown)] text-[var(--gold-light)] text-xs">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <a
              href="tel:+917020692252"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={12} />
              <span>+91 7020692252</span>
            </a>
            <a
              href="mailto:Loksanskruti.kalaseva.sangh@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={12} />
              <span>Loksanskruti.kalaseva.sangh@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <Globe size={14} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <ExternalLink size={14} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
              <Share2 size={14} />
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-[var(--bg-parchment)] border-b-2 border-[var(--accent-gold)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border-2 border-[var(--accent-gold)] bg-[var(--parchment-dark)] flex items-center justify-center flex-shrink-0">
              <Music size={20} className="text-[var(--primary-saffron)]" />
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="block text-sm font-bold text-[var(--text-espresso)] font-[family-name:var(--font-heading)] tracking-wide">
                लोकसंस्कृती कला सेवा संघ
              </span>
              <span className="block text-[10px] text-[var(--accent-gold)] font-medium tracking-widest uppercase">
                Lok Sanskruti Kala Seva Sangh
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      relative px-5 py-2.5 text-sm font-medium transition-colors
                      font-[family-name:var(--font-body)]
                      ${
                        isActive
                          ? "text-[var(--primary-saffron)]"
                          : "text-[var(--text-espresso)] hover:text-[var(--primary-saffron)]"
                      }
                    `}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--primary-saffron)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            className="lg:hidden p-2 text-[var(--text-espresso)]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-nav-overlay ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`mobile-nav-drawer ${mobileOpen ? "active" : ""}`}>
        <div className="flex items-center justify-between p-4 border-b border-[var(--accent-gold)]/30">
          <span className="text-[var(--gold-light)] font-[family-name:var(--font-heading)] text-sm font-bold">
            लोकसंस्कृती कला सेवा संघ
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-[var(--gold-light)] p-1"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>
        <ul className="py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    block px-6 py-3 text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "text-[var(--primary-saffron)] bg-[var(--dark-brown-deep)]"
                        : "text-[var(--gold-light)] hover:text-[var(--primary-saffron)] hover:bg-[var(--dark-brown-deep)]"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="px-6 pt-4 border-t border-[var(--accent-gold)]/20">
          <a
            href="tel:+917020692252"
            className="flex items-center gap-2 text-[var(--gold-light)] text-xs mb-2"
          >
            <Phone size={12} /> +91 7020692252
          </a>
          <a
            href="mailto:Loksanskruti.kalaseva.sangh@gmail.com"
            className="flex items-center gap-2 text-[var(--gold-light)] text-xs"
          >
            <Mail size={12} /> Loksanskruti.kalaseva.sangh@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
}