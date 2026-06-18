"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

const courseOptions = [
  "Classical & Light Music",
  "Voice Culture",
  "Folk Arts & Percussion",
  "Instrumental (Harmonium, Tabla, etc.)",
  "Dance (Kathak / Modern)",
  "General Inquiry",
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  return (
    <>
      <section className="bg-[var(--dark-brown)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-20 text-center">
          <p className="text-[var(--accent-gold)] text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
            Admissions &amp; Inquiries
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)]">
            Contact Us
          </h1>
          <span className="gold-divider-wide mx-auto mt-4" />
        </div>
      </section>

      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14">
            <div className="card-institutional p-7 sm:p-10">
              <h2 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-1">
                Send an Inquiry
              </h2>
              <p className="text-sm text-[var(--text-espresso)]/60 font-[family-name:var(--font-body)] mb-8">
                Fill in the form below and we will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-[var(--text-espresso)] font-[family-name:var(--font-body)] mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/20 rounded-sm text-[var(--text-espresso)] font-[family-name:var(--font-body)] focus:outline-none focus:border-[var(--primary-saffron)] transition-colors placeholder:text-[var(--text-espresso)]/30"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[var(--text-espresso)] font-[family-name:var(--font-body)] mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/20 rounded-sm text-[var(--text-espresso)] font-[family-name:var(--font-body)] focus:outline-none focus:border-[var(--primary-saffron)] transition-colors placeholder:text-[var(--text-espresso)]/30"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-medium text-[var(--text-espresso)] font-[family-name:var(--font-body)] mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/20 rounded-sm text-[var(--text-espresso)] font-[family-name:var(--font-body)] focus:outline-none focus:border-[var(--primary-saffron)] transition-colors placeholder:text-[var(--text-espresso)]/30"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-course"
                    className="block text-xs font-medium text-[var(--text-espresso)] font-[family-name:var(--font-body)] mb-1.5"
                  >
                    Course Interest
                  </label>
                  <select
                    id="contact-course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/20 rounded-sm text-[var(--text-espresso)] font-[family-name:var(--font-body)] focus:outline-none focus:border-[var(--primary-saffron)] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a course...</option>
                    {courseOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[var(--text-espresso)] font-[family-name:var(--font-body)] mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/20 text-[var(--text-espresso)] font-[family-name:var(--font-body)] focus:outline-none focus:border-[var(--primary-saffron)] transition-colors resize-none placeholder:text-[var(--text-espresso)]/30"
                    placeholder="Your inquiry or message..."
                  />
                </div>

                <button type="submit" className="btn-saffron w-full sm:w-auto">
                  <Send size={16} />
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="card-institutional p-7">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4">
                  Get in Touch
                </h3>
                <span className="gold-divider mb-5" />

                <ul className="space-y-5 mt-6">
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/20 rounded-sm">
                      <MapPin size={14} className="text-[var(--primary-saffron)]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--text-espresso)] font-[family-name:var(--font-body)] mb-0.5">
                        Head Office — Ahmednagar
                      </p>
                      <p className="text-xs text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] leading-relaxed">
                        मु. पो. केडगाव, उदयनराजे नगर,
                        <br />
                        जिल्हा अहमदनगर - 414001,
                        <br />
                        Maharashtra, India
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/20 rounded-sm">
                      <MapPin size={14} className="text-[var(--primary-saffron)]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--text-espresso)] font-[family-name:var(--font-body)] mb-0.5">
                        Pune Branch
                      </p>
                      <p className="text-xs text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] leading-relaxed">
                        नेवाळे वस्ती, दत्त मंदीर (दत्त नगर),
                        <br />
                        मांजरी खुर्द, ता. हवेली, जिल्हा पुणे
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/20 rounded-sm">
                      <Phone size={14} className="text-[var(--primary-saffron)]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--text-espresso)] font-[family-name:var(--font-body)] mb-0.5">
                        Phone
                      </p>
                      <div className="space-y-0.5">
                        <a href="tel:+917020692252" className="block text-xs text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] hover:text-[var(--primary-saffron)]">
                          +91 7020692252
                        </a>
                        <a href="tel:+919011548435" className="block text-xs text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] hover:text-[var(--primary-saffron)]">
                          +91 9011548435
                        </a>
                        <a href="tel:+919322941949" className="block text-xs text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] hover:text-[var(--primary-saffron)]">
                          +91 9322941949
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/20 rounded-sm">
                      <Mail size={14} className="text-[var(--primary-saffron)]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--text-espresso)] font-[family-name:var(--font-body)] mb-0.5">
                        Email
                      </p>
                      <a
                        href="mailto:Loksanskruti.kalaseva.sangh@gmail.com"
                        className="text-xs text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] hover:text-[var(--primary-saffron)]"
                      >
                        Loksanskruti.kalaseva.sangh@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp QR Code Card */}
              <div className="card-institutional p-7">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4">
                  WhatsApp वर संपर्क करा
                </h3>
                <span className="gold-divider mb-5" />
                <div className="mt-5 flex items-center gap-5">
                  <a
                    href="https://api.whatsapp.com/message/6ADTKOCQR43JH1?autoload=1&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 bg-white p-2.5 rounded-xl border border-[var(--accent-gold)]/20 hover:shadow-lg transition-shadow"
                  >
                    <Image
                      src="/images/whatsapp-qr.jpeg"
                      alt="WhatsApp QR Code — Scan to connect"
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                  </a>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Image src="/images/whatsapp.png" alt="WhatsApp" width={24} height={24} className="rounded-sm" />
                      <p className="text-sm font-bold text-[var(--text-espresso)] font-[family-name:var(--font-body)]">
                        WhatsApp
                      </p>
                    </div>
                    <p className="text-xs text-[var(--text-espresso)]/60 font-[family-name:var(--font-body)] leading-relaxed mb-3">
                      Scan the QR code or click the button below to message us directly on WhatsApp.
                    </p>
                    <a
                      href="https://api.whatsapp.com/message/6ADTKOCQR43JH1?autoload=1&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Image src="/images/whatsapp.png" alt="" width={16} height={16} className="rounded-sm" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Real Google Maps Embed */}
              <div className="card-institutional p-0 overflow-hidden h-64 md:h-80 w-full relative">
                <iframe
                  src="https://maps.google.com/maps?q=Swarsandhya+Music+Academy+and+Swarsandhya+Sangit+Niketan,+Kedgaon,+Ahmednagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lok Sanskruti Kala Seva Sangh Location Map"
                  className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>

              {/* Social Media Card */}
              <div className="card-institutional p-6">
                <p className="text-xs font-bold text-[var(--text-espresso)] font-[family-name:var(--font-body)] mb-3">
                  Follow Us:
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 flex items-center justify-center bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/20 rounded-lg hover:border-[var(--primary-saffron)] hover:scale-110 transition-all"
                    >
                      <Image
                        src={social.icon}
                        alt={social.label}
                        width={22}
                        height={22}
                        className="object-contain rounded-sm"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}