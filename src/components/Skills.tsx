import { skillGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-white">
    <div className="max-w-4xl mx-auto">
      <SectionHeading label="02. Skills & Technologies" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
        {skillGroups.map(({ category, skills }) => (
          <div
            key={category}
            className="bg-paper/50 border border-stone-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-sm transition-all"
          >
            <h3 className="text-primary font-mono font-semibold text-sm uppercase tracking-widest mb-4">
              {category}
            </h3>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-stone-600 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
