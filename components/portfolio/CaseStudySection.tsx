interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'panel';
}

export default function CaseStudySection({
  title,
  children,
  variant = 'default',
}: CaseStudySectionProps) {
  const content = (
    <>
      <h2 className="case-h2">{title}</h2>
      {children}
    </>
  );

  if (variant === 'panel') {
    return (
      <section className="case-panel">
        <div className="accent-bar-muted" aria-hidden />
        {content}
      </section>
    );
  }

  return <section>{content}</section>;
}
