export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 lg:px-12 py-3 bg-base-2 border-b border-rule">
      <span className="label-section">{children}</span>
    </div>
  );
}
