export const SectionHeading = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4">
    <h2 className="text-2xl font-bold text-stone-800 font-mono">{label}</h2>
    <div className="flex-1 h-px bg-stone-200" />
  </div>
);
