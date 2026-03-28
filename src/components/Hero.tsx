import { personalInfo } from "../data/portfolio";

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-linear-to-br from-paper via-paper-alt to-paper" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.06),transparent_60%)]" />

    <div
      className="absolute inset-0 opacity-[0.4]"
      style={{
        backgroundImage: `radial-gradient(circle, #c8bfaa 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }}
    />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col gap-4">
      <p className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-6 animate-fade-in">
        Hi, my name is
      </p>

      <h1 className="text-5xl sm:text-7xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
        {personalInfo.name}
      </h1>

      <h2 className="text-3xl sm:text-4xl font-semibold text-stone-500 mb-6">
        {personalInfo.title}
      </h2>

      <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
        {personalInfo.tagline}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="px-6 py-3 border border-stone-400 hover:border-blue-500 hover:text-blue-500 text-stone-600 font-semibold rounded-lg transition-colors"
        >
          Get In Touch
        </a>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors"
        >
          View My Work
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="flex flex-col items-center justify-center gap-1 text-stone-400">
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </section>
);

export default Hero;
