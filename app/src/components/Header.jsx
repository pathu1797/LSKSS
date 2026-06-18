"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academy", label: "Academy" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/pandurang.shinde.564?igsh=ajVicjdjbGR0MzIw",
    label: "Instagram",
    icon: "/images/instagram.png",
  },
  {
    href: "https://youtube.com/@pandurangshinde-swarsandhya?si=us5bA-vhwMhvip8n",
    label: "YouTube",
    icon: "/images/youtube.png",
  },
  {
    href: "https://www.facebook.com/share/197zkHHGdD/",
    label: "Facebook",
    icon: "/images/facebook.png",
  },
  {
    href: "https://api.whatsapp.com/message/6ADTKOCQR43JH1?autoload=1&app_absent=0",
    label: "WhatsApp",
    icon: "/images/whatsapp.png",
  },
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
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:opacity-100 opacity-80 transition-opacity"
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={18}
                  height={18}
                  className="rounded-sm object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="bg-[var(--bg-parchment)] border-b-2 border-[var(--accent-gold)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between h-20 lg:h-[88px]">
          <Link href="/home" className="flex items-center gap-4 group">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-[var(--accent-gold)] bg-[var(--parchment-dark)] flex items-center justify-center overflow-hidden header-logo">
                <Image
                  src="/images/puroshottam-shinde.jpg"
                  alt="Puroshottam Shinde"
                  width={72}
                  height={72}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="header-logo-ring" />
            </div>
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-[var(--accent-gold)] bg-[var(--parchment-dark)] flex items-center justify-center overflow-hidden header-logo">
                <Image
                  src="/images/logo.jpeg"
                  alt="लोकसंस्कृती कला सेवा संघ Logo"
                  width={72}
                  height={72}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="header-logo-ring" />
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="block text-lg lg:text-xl font-bold text-[var(--text-espresso)] font-[family-name:var(--font-heading)] tracking-wide">
                लोकसंस्कृती कला सेवा संघ
              </span>
              <span className="block text-xs text-[var(--accent-gold)] font-semibold tracking-widest uppercase">
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
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.jpeg"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-[var(--gold-light)] font-[family-name:var(--font-heading)] text-sm font-bold">
              लोकसंस्कृती कला सेवा संघ
            </span>
          </div>
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
            className="flex items-center gap-2 text-[var(--gold-light)] text-xs mb-4"
          >
            <Mail size={12} /> Loksanskruti.kalaseva.sangh@gmail.com
          </a>
          <div className="flex items-center gap-3 pb-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={24}
                  height={24}
                  className="rounded-sm object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}