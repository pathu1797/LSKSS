"use client";

const newsItems = [
  "📢 स्वरसंध्या संगीत निकेतन — नवीन प्रवेश प्रक्रिया सुरू! अधिक माहितीसाठी संपर्क साधा.",
  "🎵 Harirang Concert 2024 — Maharashtrian folk music performed across 6 US cities.",
  "🏆 Prof. Haridas Shinde — recipient of Lokmanya Tilak Award, Sargam Sanman & more.",
  "🚩 रणधुमाळी संबळ पथक — India's first organized folk percussion troupe, est. 2017.",
  "📞 प्रवेश अर्जासाठी: 7020692252 / 9011548435",
];

export default function NewsMarquee() {
  return (
    <div className="bg-[var(--accent-gold)] overflow-hidden">
      <div className="flex items-center h-10">
        <div className="flex-shrink-0 bg-[var(--dark-brown)] text-white px-4 h-full flex items-center z-10">
          <span className="text-xs font-bold font-[family-name:var(--font-body)] tracking-wide uppercase">
            News
          </span>
        </div>

        <div className="relative flex-1 overflow-hidden h-full flex items-center">
          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {[...newsItems, ...newsItems].map((item, i) => (
              <span
                key={i}
                className="text-xs font-medium text-[var(--text-espresso)] font-[family-name:var(--font-body)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}