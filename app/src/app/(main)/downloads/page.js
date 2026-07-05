import { Download, FileText, File } from "lucide-react";
import GSAPTextReveal from "@/components/GSAPTextReveal";

export const metadata = {
  title: "Downloads | लोकसंस्कृती कला सेवा संघ",
  description: "Download PDFs, press news, and biodatas related to Lok Sanskruti Kala Seva Sangh.",
};

const downloads = [
  { name: "Lok Sanskruti Kala Seva Sangh - Introduction", file: "LSKSS-Introduction.pdf", type: "pdf" },
  { name: "Purushottam Maharaj Shinde - Biography", file: "Purushottam-Shinde-Biography.pdf", type: "pdf" },
  { name: "Prof. Haridas Shinde - Biography (Marathi)", file: "Prof-Haridas-Shinde-Marathi-Biography.pdf", type: "pdf" },
  { name: "America Tour - Press Coverage", file: "America-News-Coverage.pdf", type: "pdf" },
  { name: "Prof. Haridas Shinde - Press Coverage", file: "Prof-Haridas-Shinde-News.pdf", type: "pdf" },
  { name: "Prof. Haridas Shinde - Biodata", file: "Prof-Haridas-Shinde-Biodata.pdf", type: "pdf" },
  { name: "Prof. Haridas Shinde - Folk Art Certificate", file: "Prof-Haridas-Shinde-Folk-Art-Certificate.pdf", type: "pdf" },
  { name: "Prof. Haridas Shinde - Letter of Honor (Sneh Arts 2024)", file: "Prof-Haridas-Shinde-Letter-of-Honor-Sneh-Arts-2024.pdf", type: "pdf" },
  { name: "Prof. Haridas Shinde - Letter of Recommendation (PGF)", file: "Prof-Haridas-Shinde-PGF-Recommendation.pdf", type: "pdf" },
  { name: "Adv. Pandurang Shinde - Biodata", file: "Adv-Pandurang-Shinde-Biodata.pdf", type: "pdf" },
  { name: "Adv. Pandurang Shinde - Folk Art Certificate (Harmonium & Vocal)", file: "Adv-Pandurang-Shinde-Folk-Art-Certificate.pdf", type: "pdf" },
  { name: "Program Agreement (14 May 2026)", file: "Program-Agreement-14-May-2026.pdf", type: "pdf" }
];

export default function DownloadsPage() {
  return (
    <>
      <section className="bg-[var(--dark-brown)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-20 text-center">
          <p className="text-[var(--accent-gold)] text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
            Resources &amp; Information
          </p>
          <GSAPTextReveal as="h1" className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)]">
            Downloads
          </GSAPTextReveal>
          <span className="gold-divider-wide mx-auto mt-4" />
        </div>
      </section>

      <section className="bg-[var(--bg-parchment)] min-h-[50vh]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item, i) => (
              <a
                key={i}
                href={`/downloads/${item.file}`}
                download
                className="group flex flex-col bg-[var(--parchment-dark)] p-6 border border-[var(--accent-gold)]/30 rounded-sm hover:border-[var(--accent-gold)] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-[var(--dark-brown)] text-[var(--primary-saffron)] group-hover:scale-110 transition-transform">
                    {item.type === 'pdf' ? <FileText size={24} /> : <File size={24} />}
                  </div>
                  <h3 className="text-[var(--text-espresso)] font-bold font-[family-name:var(--font-heading)] leading-snug">
                    {item.name}
                  </h3>
                </div>
                
                <div className="mt-auto flex items-center gap-2 text-[var(--primary-saffron)] text-sm font-semibold uppercase tracking-wider group-hover:text-[var(--dark-brown)] transition-colors">
                  <Download size={16} />
                  <span>Download {item.type.toUpperCase()}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
