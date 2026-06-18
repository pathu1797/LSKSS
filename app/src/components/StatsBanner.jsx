"use client";

import { Calendar, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "Est. 2022",
    label: "Founded on Independence Day",
  },
  {
    icon: Users,
    value: "17th",
    label: "Generation of Gondhali Lineage",
  },
  {
    icon: Globe,
    value: "6+",
    label: "US Cities Toured",
  },
  {
    icon: Award,
    value: "10+",
    label: "Awards & Film Credits",
  },
];

export default function StatsBanner() {
  return (
    <section className="bg-[var(--dark-brown)]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full border border-[var(--accent-gold)]/40 flex items-center justify-center group-hover:border-[var(--primary-saffron)] transition-colors">
                    <Icon
                      size={22}
                      className="text-[var(--accent-gold)] group-hover:text-[var(--primary-saffron)] transition-colors"
                    />
                  </div>
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--accent-gold)] font-[family-name:var(--font-heading)]">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--gold-light)] opacity-70 mt-1 font-[family-name:var(--font-body)]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}