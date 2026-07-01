import Image from "next/image";
import { MapPin, Award, Film, Star, Images, Flag } from "lucide-react";
import SpotlightCarousel from "@/components/SpotlightCarousel";

export const metadata = {
  title: "Achievements | लोकसंस्कृती कला सेवा संघ",
  description:
    "From the Philadelphia Ganesh Festival to performing before PM Narendra Modi — explore the global footprint of Lok Sanskruti Kala Seva Sangh.",
};

const usCities = [
  "New Jersey",
  "Philadelphia",
  "Edison",
  "Austin",
  "New York",
  "Boston",
];

const pressImages = Array.from({ length: 17 }, (_, i) => `/images/achievements/press/press-${i + 1}.png`);
const psImages = Array.from({ length: 9 }, (_, i) => `/images/achievements/certificates/pandurang/ps-${i + 1}.png`);
const hsImages = Array.from({ length: 11 }, (_, i) => `/images/achievements/certificates/haridas/hs-${i + 1}.png`);

const awards = [
  { year: "—", name: "Lokmanya Tilak Award, Pune" },
  { year: "—", name: "Annabhau Sathe Award, Pune" },
  { year: "2012", name: "Swami Vivekananda Award, Pune" },
  { year: "2017", name: "Ananya Sanman Award" },
  { year: "2019", name: "Sargam Sanman, Ahmednagar" },
  { year: "2023", name: "Maharashtra Times Nomination" },
];

const films = [
  "Fatteshikast (फत्तेशिकस्त)",
  "Pawankhind (पावनखिंड)",
  "Hambirrao (हंबीरराव)",
  "Anandi Gopal (आनंदी गोपाळ)",
  "Ek Hota Malin (एक होतं माळीण)",
];

export default function AchievementsPage() {
  return (
    <>
      <section className="bg-[var(--dark-brown)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-20 text-center">
          <p className="text-[var(--accent-gold)] text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
            Global Footprint
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)]">
            Achievements
          </h1>
          <span className="gold-divider-wide mx-auto mt-4" />
        </div>
      </section>

      <section className="bg-[var(--bg-parchment)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center md:text-left mb-12">
            <p className="text-[var(--primary-saffron)] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
              International Tour 2024
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4">
              Harirang Concert — USA
            </h2>
            <span className="gold-divider md:mx-0 mx-auto mb-6" />
            <p className="text-sm sm:text-base text-[var(--text-espresso)]/80 font-[family-name:var(--font-body)] leading-loose mt-6 mb-5">
              In 2024, the Sangh took Maharashtrian folk music to the United
              States via the <strong>"Harirang Concert"</strong>. They performed
              the traditional <em>"Devicha Gondhal"</em> across six major cities,
              bringing the ancient Gondhali art to a global audience.
            </p>
            <p className="text-sm sm:text-base text-[var(--text-espresso)]/80 font-[family-name:var(--font-body)] leading-loose mb-8">
              A major milestone was performing at the{" "}
              <strong>Philadelphia Ganesh Festival</strong> — North America's
              largest 10-day public Ganesh festival — showcasing the depth of
              Maharashtra's folk traditions on an international stage.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {usCities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--parchment-dark)] border border-[var(--accent-gold)]/20 rounded-sm text-xs font-medium text-[var(--text-espresso)] font-[family-name:var(--font-body)]"
                >
                  <MapPin size={10} className="text-[var(--primary-saffron)]" />
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12">
            {/* Image 1 (Main) */}
            <div className="md:col-span-2 lg:col-span-4 bg-[var(--parchment-dark)] p-3 md:p-4 border border-[var(--accent-gold)]/40 shadow-md rounded-sm flex flex-col hover:shadow-xl hover:border-[var(--accent-gold)] transition-all duration-300 group">
              <div className="relative w-full h-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-[2px] bg-black/5">
                <Image src="/images/achievements/harirang/main.webp" alt="Harirang Concert Main" fill priority sizes="100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-[var(--dark-brown)]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
              </div>
            </div>
            
            {/* Image 2 (R1) */}
            <div className="md:col-span-1 lg:col-span-2 bg-[var(--parchment-dark)] p-3 md:p-4 border border-[var(--accent-gold)]/40 shadow-md rounded-sm flex flex-col hover:shadow-xl hover:border-[var(--accent-gold)] transition-all duration-300 group">
              <div className="relative w-full h-full aspect-video overflow-hidden rounded-[2px] bg-black/5">
                <Image src="/images/achievements/harirang/r1.jpeg" alt="Harirang Concert R1" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-[var(--dark-brown)]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
              </div>
            </div>

            {/* Image 3 (R2) */}
            <div className="md:col-span-1 lg:col-span-2 bg-[var(--parchment-dark)] p-3 md:p-4 border border-[var(--accent-gold)]/40 shadow-md rounded-sm flex flex-col hover:shadow-xl hover:border-[var(--accent-gold)] transition-all duration-300 group">
              <div className="relative w-full h-full aspect-video overflow-hidden rounded-[2px] bg-black/5">
                <Image src="/images/achievements/harirang/r2.jpeg" alt="Harirang Concert R2" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-[var(--dark-brown)]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
              </div>
            </div>

            {/* Image 4 (R5 - Poster) */}
            <div className="col-span-1 bg-[var(--parchment-dark)] p-3 md:p-4 border border-[var(--accent-gold)]/40 shadow-md rounded-sm flex flex-col hover:shadow-xl hover:border-[var(--accent-gold)] transition-all duration-300 group">
              <div className="relative w-full h-full aspect-square md:aspect-[4/3] overflow-hidden rounded-[2px] bg-black/5">
                <Image src="/images/achievements/harirang/r5.jpeg" alt="Harirang Concert R5" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-[var(--dark-brown)]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
              </div>
            </div>

            {/* Image 5 (R3 - Poster) */}
            <div className="col-span-1 bg-[var(--parchment-dark)] p-3 md:p-4 border border-[var(--accent-gold)]/40 shadow-md rounded-sm flex flex-col hover:shadow-xl hover:border-[var(--accent-gold)] transition-all duration-300 group">
              <div className="relative w-full h-full aspect-square md:aspect-[4/3] overflow-hidden rounded-[2px] bg-black/5">
                <Image src="/images/achievements/harirang/r3.jpeg" alt="Harirang Concert R3" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-[var(--dark-brown)]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
              </div>
            </div>

            {/* Image 6 (R4-1 - Poster) */}
            <div className="col-span-1 bg-[var(--parchment-dark)] p-3 md:p-4 border border-[var(--accent-gold)]/40 shadow-md rounded-sm flex flex-col hover:shadow-xl hover:border-[var(--accent-gold)] transition-all duration-300 group">
              <div className="relative w-full h-full aspect-square md:aspect-[4/3] overflow-hidden rounded-[2px] bg-black/5">
                <Image src="/images/achievements/harirang/r4-1.jpeg" alt="Harirang Concert R4-1" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-[var(--dark-brown)]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
              </div>
            </div>

            {/* Image 7 (R4-2 - Poster) */}
            <div className="col-span-1 bg-[var(--parchment-dark)] p-3 md:p-4 border border-[var(--accent-gold)]/40 shadow-md rounded-sm flex flex-col hover:shadow-xl hover:border-[var(--accent-gold)] transition-all duration-300 group">
              <div className="relative w-full h-full aspect-square md:aspect-[4/3] overflow-hidden rounded-[2px] bg-black/5">
                <Image src="/images/achievements/harirang/r4-2.jpeg" alt="Harirang Concert R4-2" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-[var(--dark-brown)]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--parchment-dark)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-20">
          <div className="card-institutional p-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="p-7 sm:p-10">
                <div className="flex items-center gap-2 mb-3">
                  <Flag size={16} className="text-[var(--primary-saffron)]" />
                  <span className="text-[10px] font-bold text-[var(--primary-saffron)] uppercase tracking-widest font-[family-name:var(--font-body)]">
                    Special Honor
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-3">
                  Performance before PM Narendra Modi
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] leading-loose mb-5 max-w-prose">
                  The Shinde brothers performed the traditional{" "}
                  <strong>Jagran Gondhal</strong> in the United States in the
                  presence of Prime Minister Narendra Modi during his September
                  tour. This performance was recognized as a significant cultural
                  moment, with the PM acknowledging their contribution to
                  promoting Maharashtrian folk art globally.
                </p>
                <p className="text-sm sm:text-base text-[var(--text-espresso)]/70 font-[family-name:var(--font-body)] leading-loose max-w-prose">
                  This recognition at the highest level of national leadership
                  has brought visibility to the Gondhali tradition and inspired
                  a new generation of folk artists.
                </p>
              </div>
              <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full h-full min-h-[450px] p-6 lg:p-0 lg:py-10 lg:pr-10">
                {/* Photo T1 (Primary) */}
                <div className="col-span-2 row-span-2 relative w-full h-full bg-white rounded-sm border border-[var(--accent-gold)]/30 shadow-md p-2 flex items-center justify-center group">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image src="/images/achievements/harirang/t1.jpeg" alt="PM Modi Event Primary" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                </div>
                
                {/* Photo T2 (Secondary Highlight) */}
                <div className="col-span-2 row-span-1 relative w-full h-full bg-white rounded-sm border border-[var(--accent-gold)]/30 shadow-md p-2 flex items-center justify-center group">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image src="/images/achievements/harirang/t2.jpeg" alt="PM Modi Event Secondary" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                </div>
                
                {/* Photo T3 (Supporting) */}
                <div className="col-span-1 row-span-1 relative w-full h-full bg-white rounded-sm border border-[var(--accent-gold)]/30 shadow-md p-2 flex items-center justify-center group">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image src="/images/achievements/harirang/t3.jpeg" alt="PM Modi Event Supporting 1" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                </div>

                {/* Photo T4 (Supporting) */}
                <div className="col-span-1 row-span-1 relative w-full h-full bg-white rounded-sm border border-[var(--accent-gold)]/30 shadow-md p-2 flex items-center justify-center group">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image src="/images/achievements/harirang/t4.jpeg" alt="PM Modi Event Supporting 2" fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Media Coverage */}
      <section className="bg-[var(--bg-parchment)] border-t border-[var(--accent-gold)]/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)]">
            Press &amp; Media Coverage
          </h2>
          <span className="gold-divider mx-auto mt-4 mb-12" />

          <SpotlightCarousel images={pressImages} />
          
          <div className="mt-8">
            <a
              href="/documents/lskss-press-coverage.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-saffron text-sm inline-flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Images size={16} />
              View Full Press Portfolio (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Certificates & Recognitions */}
      <section className="bg-[var(--parchment-dark)] py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)]">
              Certificates &amp; Official Recognitions
            </h2>
            <span className="gold-divider mx-auto mt-4" />
          </div>

          {/* Carousel 1: Adv. Pandurang Shinde */}
          <h3 className="text-3xl font-playfair font-bold text-[var(--primary-saffron)] text-center mb-8">
            Adv. Pandurang Shinde
          </h3>
          <SpotlightCarousel images={psImages} />
          <div className="mt-8 text-center">
            <a
              href="/documents/ps-certificates.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-saffron px-8 py-4 inline-flex items-center gap-3 font-[family-name:var(--font-body)] font-semibold transition-transform hover:scale-105"
            >
              <Award size={18} />
              View Full Certificates Portfolio (PDF)
            </a>
          </div>
          
          <div className="mt-20 mb-12" />

          {/* Carousel 2: Prof. Haridas Shinde */}
          <h3 className="text-3xl font-playfair font-bold text-[var(--primary-saffron)] text-center mb-8">
            Prof. Haridas Shinde
          </h3>
          <SpotlightCarousel images={hsImages} />
          
          <div className="mt-8 text-center">
            <a
              href="/documents/hs-certificates.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-saffron px-8 py-4 inline-flex items-center gap-3 font-[family-name:var(--font-body)] font-semibold transition-transform hover:scale-105"
            >
              <Award size={18} />
              View Full Certificates Portfolio (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--dark-brown)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
          <div className="text-center mb-10">
            <p className="text-[var(--primary-saffron)] text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
              Prof. Haridas Shinde
            </p>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)]">
              Awards &amp; Cinematic Credits
            </h2>
            <span className="gold-divider-wide mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Award size={18} className="text-[var(--accent-gold)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)]">
                  Awards &amp; Honours
                </h3>
              </div>
              <div className="space-y-3">
                {awards.map((award, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-[var(--dark-brown-deep)] border border-[var(--accent-gold)]/10 rounded-sm p-5"
                  >
                    <div className="flex-shrink-0 w-14 text-center">
                      <span className="text-xs font-bold text-[var(--primary-saffron)] font-[family-name:var(--font-body)]">
                        {award.year}
                      </span>
                    </div>
                    <div className="w-px h-6 bg-[var(--accent-gold)]/20" />
                    <p className="text-sm text-[var(--gold-light)] font-[family-name:var(--font-body)]">
                      {award.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5">
                <Film size={18} className="text-[var(--accent-gold)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--gold-light)]">
                  Film Playback &amp; Contributions
                </h3>
              </div>
              <p className="text-sm text-[var(--gold-light)]/60 font-[family-name:var(--font-body)] mb-5 leading-relaxed">
                Contributed traditional folk vocals and percussion to major
                Marathi films:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {films.map((film, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-[var(--dark-brown-deep)] border border-[var(--accent-gold)]/10 rounded-sm p-5"
                  >
                    <Star
                      size={14}
                      className="text-[var(--accent-gold)] flex-shrink-0"
                    />
                    <span className="text-sm text-[var(--gold-light)] font-[family-name:var(--font-body)]">
                      {film}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--gold-light)]/40 mt-4 font-[family-name:var(--font-body)]">
                2500+ folk music performances across Maharashtra and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}