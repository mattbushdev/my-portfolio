import { experiences, type Experience } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const Experience = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeading label="03. Experience" />
      <p className="text-stone-400 mt-4 mb-12 text-sm">
        Roles I have held and the work I did in them.
      </p>

      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <ExperienceItem
            key={i}
            exp={exp}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  </section>
);

const ExperienceItem = ({
  exp,
  isLast,
}: {
  exp: Experience;
  isLast: boolean;
}) => (
  <div
    className={`flex flex-col md:flex-row gap-4 md:gap-8 ${isLast ? "" : "pb-10"}`}
  >
    <div className="md:w-44 shrink-0 flex md:flex-col md:items-end items-center gap-2 md:gap-1 pt-0 md:pt-1">
      <span className="text-sm font-mono text-stone-400 whitespace-nowrap">
        {exp.period}
      </span>
      <span className="text-xs text-stone-400 md:text-right">
        {exp.location}
      </span>
    </div>

    <div className="hidden md:flex flex-col items-center shrink-0 pt-1.5">
      <div className="size-3 rounded-full bg-blue-500 border-2 border-paper ring-4 ring-stone-200 z-10 shrink-0" />
      {!isLast && <div className="w-px flex-1 bg-stone-200 mt-2" />}
    </div>

    <div className="flex-1 bg-white border border-stone-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
      <div className="mb-3">
        <h3 className="text-stone-900 font-semibold text-lg leading-snug">
          {exp.role}
        </h3>
        <p className="text-blue-500 font-medium text-sm mt-0.5">
          {exp.company}
        </p>
      </div>

      <p className="text-stone-500 text-sm leading-relaxed mb-4">
        {exp.description}
      </p>

      <ul className="space-y-1.5 mb-4">
        {exp.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-stone-500 text-sm">
            <span className="text-blue-500 shrink-0">▸</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-3 border-t border-stone-100">
        {exp.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-blue-500 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;
