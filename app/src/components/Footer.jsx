import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const quickLinks = [
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

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-brown)] text-[var(--gold-light)]">
      <div className="h-1 bg-[var(--accent-gold)]" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: About + Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-[var(--accent-gold)] overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo.jpeg"
                  alt="लोकसंस्कृती कला सेवा संघ"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-white">
                लोकसंस्कृती कला सेवा संघ
              </h3>
            </div>
            <p className="text-sm leading-loose opacity-80 mb-4">
              Conservation, development, and global promotion of national folk
              art and culture. 17th generation custodians of the Gondhali tradition
              since the court of Chhatrapati Shivaji Maharaj.
            </p>
            <p className="text-[10px] tracking-widest uppercase opacity-60 mb-5">
              Reg. No. महा .३६७/२०२२ एफ - २४१२६
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-[var(--dark-brown-deep)] border border-[var(--accent-gold)]/30 flex items-center justify-center hover:border-[var(--primary-saffron)] hover:scale-110 transition-all"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={20}
                    height={20}
                    className="rounded-sm object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold text-white mb-4">
              Quick Links
            </h4>
            <span className="gold-divider mb-4" />
            <ul className="space-y-3 mt-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs opacity-80 hover:opacity-100 hover:text-[var(--primary-saffron)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academy + WhatsApp QR */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold text-white mb-4">
              स्वरसंध्या संगीत निकेतन
            </h4>
            <span className="gold-divider mb-4" />
            <p className="text-sm leading-loose opacity-80 mt-4 mb-4">
              Swarsandhya Sangeet Niketan — the educational wing, affiliated
              with the prestigious Akhil Bharatiya Gandharva Mahavidyalaya.
            </p>
            <p className="text-xs opacity-70 mb-1">
              ● Classical &amp; Light Music
            </p>
            <p className="text-xs opacity-70 mb-1">
              ● Folk Arts &amp; Percussion
            </p>
            <p className="text-xs opacity-70 mb-1">
              ● Instrumental &amp; Dance
            </p>
            <Link
              href="/academy"
              className="inline-block mt-3 text-xs text-[var(--primary-saffron)] hover:underline font-medium"
            >
              View All Courses →
            </Link>

            {/* WhatsApp QR Code */}
            <div className="mt-6 pt-5 border-t border-[var(--accent-gold)]/20">
              <p className="text-xs font-semibold text-white mb-2">
                WhatsApp वर संपर्क करा
              </p>
              <a
                href="https://api.whatsapp.com/message/6ADTKOCQR43JH1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white p-2 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Image
                  src="/images/whatsapp-qr.jpeg"
                  alt="WhatsApp QR Code — Scan to connect"
                  width={100}
                  height={100}
                  className="rounded"
                />
              </a>
              <p className="text-[10px] opacity-50 mt-1.5">
                Scan to chat on WhatsApp
              </p>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold text-white mb-4">
              Contact Us
            </h4>
            <span className="gold-divider mb-4" />
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[var(--primary-saffron)]" />
                <span className="text-xs leading-relaxed opacity-80">
                  मु. पो. केडगाव, उदयनराजे नगर,<br />
                  जिल्हा अहमदनगर - 414001,<br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[var(--primary-saffron)]" />
                <span className="text-xs leading-relaxed opacity-80">
                  नेवाळे वस्ती, दत्त मंदीर, मांजरी खुर्द,<br />
                  ता. हवेली, जिल्हा पुणे
                </span>
              </li>
              <li>
                <a
                  href="tel:+917020692252"
                  className="flex items-center gap-2.5 text-xs opacity-80 hover:text-[var(--primary-saffron)] transition-colors"
                >
                  <Phone size={14} className="flex-shrink-0 text-[var(--primary-saffron)]" />
                  +91 7020692252 / 9011548435
                </a>
              </li>
              <li>
                <a
                  href="mailto:Loksanskruti.kalaseva.sangh@gmail.com"
                  className="flex items-center gap-2.5 text-xs opacity-80 hover:text-[var(--primary-saffron)] transition-colors"
                >
                  <Mail size={14} className="flex-shrink-0 text-[var(--primary-saffron)]" />
                  Loksanskruti.kalaseva.sangh@gmail.com
                </a>
              </li>
            </ul>

            {/* YouTube Playlists */}
            <div className="mt-5 pt-4 border-t border-[var(--accent-gold)]/20">
              <p className="text-xs font-semibold text-white mb-2.5">
                YouTube Playlists
              </p>
              <a
                href="https://www.youtube.com/playlist?list=PLxF6H57GoZMjHrxS_sA-UkG_u161AEQQI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] opacity-70 hover:text-[var(--primary-saffron)] hover:opacity-100 transition-colors mb-2"
              >
                <Image src="/images/youtube.png" alt="YouTube" width={14} height={14} className="rounded-sm" />
                Maharashtra Authentic Folk Concert
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLxF6H57GoZMiDxLjhb72Nkd50syQWcaF-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] opacity-70 hover:text-[var(--primary-saffron)] hover:opacity-100 transition-colors"
              >
                <Image src="/images/youtube.png" alt="YouTube" width={14} height={14} className="rounded-sm" />
                वारसा महाराष्ट्राचा
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--accent-gold)]/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] opacity-60 text-center sm:text-left">
            © {new Date().getFullYear()} लोकसंस्कृती कला सेवा संघ. All rights reserved.
          </p>
          <p className="text-[10px] opacity-40">
            Founded by Prof. Pandurang Uttam Shinde &amp; Prof. Haridas Shinde
          </p>
        </div>
      </div>
    </footer>
  );
}