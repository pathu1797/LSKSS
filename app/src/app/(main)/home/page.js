import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Trophy,
  Images,
  BookOpen,
  Calendar,
} from "lucide-react";
import NewsMarquee from "@/components/NewsMarquee";
import StatsBanner from "@/components/StatsBanner";

export const metadata = {
  title: "Home | लोकसंस्कृती कला सेवा संघ",
  description:
    "Welcome to Lok Sanskruti Kala Seva Sangh — 17th generation custodians of Maharashtrian folk art. Explore our academy, achievements, and cultural legacy.",
};

export default function HomePage() {
  return (
    <>
      <section className="relative bg-[var(--dark-brown)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--primary-saffron)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[var(--accent-gold)]/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[var(--accent-gold)] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] font-medium mb-4">
                Since the Court of Chhatrapati Shivaji Maharaj
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)] leading-tight mb-5">
                17th Generation Custodians
                <br />
                <span className="text-[var(--primary-saffron)]">
                  of Maharashtrian Folk Art
                </span>
              </h1>
              <p className="text-[var(--gold-light)]/70 text-sm sm:text-base max-w-xl leading-loose font-[family-name:var(--font-body)] mb-8">
                Lok Sanskruti Kala Seva Sangh preserves, develops, and promotes
                national folk art and culture globally — carrying forward the
                legacy of Gondhali Agyandas across seventeen unbroken generations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-saffron">
                  Our Legacy <ArrowRight size={16} />
                </Link>
                <Link href="/academy" className="btn-outline border-[var(--accent-gold)] text-[var(--gold-light)] hover:bg-[var(--accent-gold)] hover:text-[var(--dark-brown)]">
                  Explore Academy <GraduationCap size={16} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="w-full aspect-[4/3] border-2 border-[var(--accent-gold)]/40 bg-[var(--parchment-dark)]/10 rounded-sm flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-[var(--accent-gold)]/20 flex items-center justify-center">
                    <Images size={32} className="text-[var(--accent-gold)]/50" />
                  </div>
                  <p className="text-[var(--accent-gold)]/50 text-xs font-[family-name:var(--font-body)]">
                    Hero Image
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-[var(--accent-gold)]/40 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      <NewsMarquee />

      <StatsBanner />

      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
          <div className="text-center mb-12">
            <p className="text-[var(--primary-saffron)] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
              — Activities —
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)]">
              Learn, Perform &amp; Excel
            </h2>
            <p className="text-sm text-[var(--text-espresso)]/60 mt-3 font-[family-name:var(--font-body)] max-w-lg mx-auto">
              Explore your passion for classical music and folk art
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-institutional p-0 overflow-hidden group">
              <div className="h-52 bg-[var(--parchment-dark)] flex items-center justify-center">
                <div className="text-center">
                  <GraduationCap size={40} className="mx-auto text-[var(--accent-gold)]/30 mb-2" />
                  <p className="text-[var(--accent-gold)]/40 text-[10px]">Image</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-3">
                  Academy
                </h3>
                <p className="text-sm text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] mb-5 leading-loose">
                  Swarsandhya Sangeet Niketan — formal classical music education
                  affiliated with Akhil Bharatiya Gandharva Mahavidyalaya. Courses in vocal,
                  instrumental, folk arts, and dance.
                </p>
                <Link href="/academy" className="btn-outline text-sm py-2.5 px-6">
                  Explore Courses
                </Link>
              </div>
            </div>

            <div className="card-institutional p-0 overflow-hidden group">
              <div className="h-52 bg-[var(--parchment-dark)] flex items-center justify-center">
                <div className="text-center">
                  <Trophy size={40} className="mx-auto text-[var(--accent-gold)]/30 mb-2" />
                  <p className="text-[var(--accent-gold)]/40 text-[10px]">Image</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-3">
                  Achievements
                </h3>
                <p className="text-sm text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] mb-5 leading-loose">
                  From the Philadelphia Ganesh Festival to performing before
                  PM Narendra Modi — our global footprint spans 6 US cities
                  and 10+ prestigious national awards.
                </p>
                <Link href="/achievements" className="btn-outline text-sm py-2.5 px-6">
                  View Achievements
                </Link>
              </div>
            </div>

            <div className="card-institutional p-0 overflow-hidden lg:col-span-2 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-3 gap-0">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div
                      key={n}
                      className="h-36 bg-[var(--parchment-dark)] flex items-center justify-center border-r border-b border-[var(--accent-gold)]/10"
                    >
                      <div className="text-center">
                        <Images size={20} className="mx-auto text-[var(--accent-gold)]/25 mb-1" />
                        <p className="text-[var(--accent-gold)]/25 text-[8px]">Photo {n}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-3">
                    Gallery
                  </h3>
                  <p className="text-sm text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] mb-6 leading-loose">
                    Explore our archive of performances, cultural events, international tours,
                    and heritage moments captured across Maharashtra and beyond.
                  </p>
                  <Link href="/gallery" className="btn-saffron self-start">
                    View Full Gallery <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--parchment-dark)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`bg-[var(--bg-parchment)] border border-[var(--accent-gold)]/20 rounded-sm flex items-center justify-center ${
                    n === 1 ? "h-52 col-span-2" : "h-44"
                  }`}
                >
                  <Images size={24} className="text-[var(--accent-gold)]/25" />
                </div>
              ))}
            </div>

            <div>
              <p className="text-[var(--primary-saffron)] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] font-medium mb-3">
                About Us
              </p>
              <span className="gold-divider-wide mb-5" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mt-5 mb-5">
                Welcome to Lok Sanskruti Kala Seva Sangh
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-espresso)]/80 font-[family-name:var(--font-body)] leading-loose mb-5">
                Established on August 15, 2022, in Ahilyanagar (Ahmednagar) by
                Prof. Pandurang Uttam Shinde and Prof. Haridas Shinde, the Sangh
                is dedicated to the conservation, development, and global promotion
                of national folk art and culture.
              </p>
              <p className="text-sm sm:text-base text-[var(--text-espresso)]/80 font-[family-name:var(--font-body)] leading-loose mb-8">
                The founders are the 17th descendants of Gondhali Agyandas, the
                legendary Shahir in the court of Chhatrapati Shivaji Maharaj. They
                inherited their art from their father, the late H.B.P. Purushottam
                Maharaj Shinde, who transformed the traditional Gondhali art by
                uniting it with the spiritual Warkari path.
              </p>
              <Link href="/about" className="btn-saffron">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
          <div className="text-center mb-10">
            <p className="text-[var(--primary-saffron)] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
              Events
            </p>
            <span className="gold-divider mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mt-4">
              Upcoming &amp; Recent
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Harirang Concert Series",
                desc: "Classical & folk music concerts showcasing Maharashtrian heritage traditions across venues nationwide.",
                date: "Ongoing",
              },
              {
                title: "Swarsandhya Admissions",
                desc: "New batch admissions open for all classical music & folk art courses. Online and offline batches available.",
                date: "Enrollment Open",
              },
              {
                title: "Annual Cultural Festival",
                desc: "Celebrating the rich traditions of Gondhali art & Warkari sampradaya with performances and workshops.",
                date: "Coming Soon",
              },
            ].map((event, i) => (
              <div key={i} className="card-institutional p-0 overflow-hidden">
                <div className="h-48 bg-[var(--parchment-dark)] border-b border-[var(--accent-gold)]/10 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar size={28} className="mx-auto text-[var(--accent-gold)]/25 mb-2" />
                    <p className="text-[var(--accent-gold)]/25 text-[9px]">Event Photo</p>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold text-[var(--primary-saffron)] uppercase tracking-wider font-[family-name:var(--font-body)]">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[var(--text-espresso)]/60 font-[family-name:var(--font-body)] leading-loose">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}