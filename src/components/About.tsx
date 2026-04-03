import { personalInfo } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <SectionHeading label="01. About Me" />

      <div className="grid md:grid-cols-5 gap-12 mt-12 items-start">
        <div className="md:col-span-3 space-y-4 text-stone-600 leading-relaxed text-base">
          <p>{personalInfo.bio}</p>
          <p>
            I have built and shipped production systems spanning React
            frontends, .NET 8 backend APIs combined with PostgreSQL and
            serverless edge APIs on Cloudflare Workers. I enjoy working closely
            with the product and I care deeply about the user experience of the
            applications I build.
          </p>
          <p>
            When I am not coding I am usually cooking up a storm in the kitchen
            or down the rabbit hole exploring the latest AI tool!
          </p>
        </div>

        <div className="hidden md:col-span-2 md:block">
          <div className="w-full aspect-square max-w-xs mx-auto md:mx-0 rounded-xl bg-linear-to-br from-blue-100 to-blue-100 border border-blue-200 flex items-center justify-center">
            <img
              src="/favicon.svg"
              alt="Avatar"
              className="size-40 rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
        {[
          { value: "4+", label: "Years Experience" },
          { value: "Azure Certified", label: "Since 2022" },
          { value: "∞", label: "<div>'s inspected" },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="bg-white border border-stone-200 rounded-xl p-6 text-center shadow-sm"
          >
            <p className="text-3xl font-bold text-blue-500 mb-1">{value}</p>
            <p className="text-xs text-stone-400 uppercase tracking-widest">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
