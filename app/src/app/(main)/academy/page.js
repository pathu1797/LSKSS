import Link from "next/link";
import {
  Mic,
  Music,
  Drum,
  Piano,
  PersonStanding,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Academy | स्वरसंध्या संगीत निकेतन",
  description:
    "Swarsandhya Sangeet Niketan — formal classical music education affiliated with Akhil Bharatiya Gandharva Mahavidyalaya. Courses in vocal, instrumental, folk arts, and dance.",
};

const courses = [
  {
    icon: Mic,
    title: "Classical & Light Music",
    titleMr: "शास्त्रीय गायन व सुगम संगीत",
    duration: "3 years / 3 months",
    items: [
      "Classical Singing (शास्त्रीय गायन)",
      "Semi-Vocal Singing (उपशास्त्रीय गायन)",
      "Bhajan (भजन)",
      "Thumri (ठुमरी)",
      "Ghazal (गझल)",
      "Film Songs (चित्रपटगीत)",
    ],
    highlight: "Gwalior & Kirana Gharana guidance",
  },
  {
    icon: Music,
    title: "Voice Culture",
    titleMr: "व्हॉईस कल्चर",
    duration: "3-month certificate",
    items: [
      "Voice Training & Modulation (आवाज जोपासना शास्त्र)",
      "Breath Control Techniques",
      "Stage Performance Preparation",
    ],
    highlight: "Specialized certificate course",
  },
  {
    icon: Drum,
    title: "Folk Arts & Percussion",
    titleMr: "लोककला वाद्य",
    duration: "4 months – 1 year",
    items: [
      "Folk Singing (लोककला गायन)",
      "Dholki (ढोलकी)",
      "Sambal (संबळ)",
      "Tashya (तशा)",
      "Shahiri Daf (शाहीरी दफ)",
    ],
    highlight: "Authentic Gondhali tradition",
  },
  {
    icon: Piano,
    title: "Instrumental",
    titleMr: "वादन",
    duration: "6 months – 1 year",
    items: [
      "Harmonium (हार्मोनिअम)",
      "Synthesizer (सिंथेसायझर)",
      "Piano (पियानो)",
      "Flute / Bansuri (बासरी)",
      "Guitar (गिटार)",
      "Tabla (तबला)",
      "Mrudang (मृदंग)",
    ],
    highlight: "Gandharva Mahavidyalaya curriculum",
  },
  {
    icon: PersonStanding,
    title: "Dance",
    titleMr: "नृत्य",
    duration: "4 months",
    items: [
      "Classical Kathak (शास्त्रीय कथक नृत्य)",
      "Modern Dance (आधुनिक नृत्य)",
    ],
    highlight: "Certificate & Diploma courses",
  },
];

export default function AcademyPage() {
  return (
    <>
      <section className="bg-[var(--dark-brown)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-20 text-center">
          <p className="text-[var(--accent-gold)] text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
            Education Wing
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)] mb-2">
            स्वरसंध्या संगीत निकेतन
          </h1>
          <p className="text-[var(--gold-light)]/60 text-sm font-[family-name:var(--font-body)]">
            Swarsandhya Sangeet Niketan
          </p>
          <span className="gold-divider-wide mx-auto mt-4" />
          <p className="text-[var(--gold-light)]/70 text-sm mt-5 font-[family-name:var(--font-body)] max-w-2xl mx-auto leading-relaxed">
            Examinations in classical vocal and instrumental music will be conducted in affiliation with the curriculum of the{" "}
            <strong className="text-[var(--accent-gold)]">
              Akhil Bharatiya Gandharva Mahavidyalaya
            </strong>
            . Additionally, classes for folk music and folk instruments will be held under the auspices of the{" "}
            <strong className="text-[var(--accent-gold)]">
              Loksanskruti Kala Seva Sangh
            </strong>
            .
          </p>
        </div>
      </section>

      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Praarambhik to Alankar", desc: "Complete exam guidance" },
              { label: "Gwalior & Kirana", desc: "Gharana-based training" },
              { label: "Experienced Faculty", desc: "High-tradition teachers" },
            ].map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/15 rounded-sm p-5"
              >
                <div className="w-2 h-8 bg-[var(--primary-saffron)] flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-[var(--text-espresso)] font-[family-name:var(--font-heading)]">
                    {feat.label}
                  </p>
                  <p className="text-xs text-[var(--text-espresso)]/60 font-[family-name:var(--font-body)]">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)]">
              Course Categories
            </h2>
            <p className="text-sm text-[var(--text-espresso)]/60 mt-2 font-[family-name:var(--font-body)]">
              आवड तुमची... मार्गदर्शन आमचे...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => {
              const Icon = course.icon;
              return (
                <div key={i} className="card-institutional p-7 flex flex-col">
                  <div className="w-14 h-14 mb-5 border border-[var(--accent-gold)]/30 rounded-sm flex items-center justify-center bg-[var(--parchment-dark)]">
                    <Icon size={26} className="text-[var(--primary-saffron)]" />
                  </div>

                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-1">
                    {course.title}
                  </h3>
                  <p className="text-xs text-[var(--accent-gold)] font-medium font-[family-name:var(--font-body)] mb-3">
                    {course.titleMr}
                  </p>

                  <div className="flex items-center gap-1.5 mb-3">
                    <Clock size={12} className="text-[var(--text-espresso)]/40" />
                    <span className="text-[11px] text-[var(--text-espresso)]/50 font-[family-name:var(--font-body)]">
                      Duration: {course.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 flex-1 mb-5">
                    {course.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-[var(--accent-gold)]/15 pt-4">
                    <p className="text-[10px] text-[var(--primary-saffron)] font-bold uppercase tracking-wider font-[family-name:var(--font-body)]">
                      ★ {course.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--parchment-dark)]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-20 text-center">
          <h2 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4">
            Class Schedule &amp; Logistics
          </h2>
          <span className="gold-divider mx-auto mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="card-institutional p-6">
              <p className="text-2xl font-bold text-[var(--primary-saffron)] font-[family-name:var(--font-heading)]">
                2×
              </p>
              <p className="text-xs text-[var(--text-espresso)]/70 mt-1 font-[family-name:var(--font-body)]">
                Classes per week (Offline)
              </p>
            </div>
            <div className="card-institutional p-6">
              <p className="text-2xl font-bold text-[var(--primary-saffron)] font-[family-name:var(--font-heading)]">
                Online
              </p>
              <p className="text-xs text-[var(--text-espresso)]/70 mt-1 font-[family-name:var(--font-body)]">
                Available on demand
              </p>
            </div>
            <div className="card-institutional p-6">
              <p className="text-2xl font-bold text-[var(--primary-saffron)] font-[family-name:var(--font-heading)]">
                6+
              </p>
              <p className="text-xs text-[var(--text-espresso)]/70 mt-1 font-[family-name:var(--font-body)]">
                Minimum age (years)
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] mb-8 max-w-prose mx-auto leading-loose">
            Admissions are open for students of all ages. Certificate courses
            require no prior experience. Diploma and advanced courses require
            secondary school examination or equivalent.
          </p>
          <Link href="/contact" className="btn-saffron">
            Enroll Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}