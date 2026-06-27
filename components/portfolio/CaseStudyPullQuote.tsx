export default function CaseStudyPullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-accent pl-6 py-2 mt-6">
      <p className="case-body italic">{children}</p>
    </blockquote>
  );
}
