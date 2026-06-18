import { MapPin, Award, Film, Star, Images, Flag } from "lucide-react";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-[var(--primary-saffron)] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-body)] font-medium mb-2">
                International Tour 2024
              </p>
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-espresso)] mb-4">
                Harirang Concert — USA
              </h2>
              <span className="gold-divider mb-6" />
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

              <div className="flex flex-wrap gap-3">
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

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`gallery-frame flex items-center justify-center ${
                    n === 1 ? "col-span-2 h-60" : "h-48"
                  }`}
                >
                  <div className="text-center">
                    <Images
                      size={n === 1 ? 28 : 20}
                      className="mx-auto text-[var(--accent-gold)]/25 mb-1"
                    />
                    <p className="text-[var(--accent-gold)]/30 text-[9px]">
                      Tour Photo {n}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--parchment-dark)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-20">
          <div className="card-institutional p-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
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
              <div className="h-60 lg:h-auto bg-[var(--parchment-dark)] border-l border-[var(--accent-gold)]/10 flex items-center justify-center">
                <div className="text-center">
                  <Images size={32} className="mx-auto text-[var(--accent-gold)]/25 mb-2" />
                  <p className="text-[var(--accent-gold)]/30 text-[10px]">
                    PM Modi Event Photo
                  </p>
                </div>
              </div>
            </div>
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