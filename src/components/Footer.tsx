import { personalInfo } from "../data/portfolio";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-stone-200">
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-400">
      <p className="font-mono">Built with React + Vite + Tailwind CSS</p>
      <p>
        {personalInfo.name} &copy; {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
