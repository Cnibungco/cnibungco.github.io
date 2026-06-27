export default function ProjectTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-caps px-2.5 py-1 text-accent border border-accent/30 bg-accent/5 rounded-sm">
      {children}
    </span>
  );
}
