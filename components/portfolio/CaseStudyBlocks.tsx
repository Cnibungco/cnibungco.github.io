export function CaseStudyCallout({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="case-callout mt-10">
      <p className="label-caps text-accent mb-2">{label}</p>
      <div className="case-body">{children}</div>
    </div>
  );
}

export function CaseStudyInsight({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="case-insight">
      <h3 className="font-newsreader text-lg text-sand mb-4">{title}</h3>
      <div className="case-body">{children}</div>
    </div>
  );
}

interface CaseStudyStatProps {
  value: string;
  label: string;
}

export function CaseStudyStat({ value, label }: CaseStudyStatProps) {
  return (
    <div className="text-center">
      <p className="font-newsreader text-4xl text-accent mb-2">{value}</p>
      <p className="text-sm text-sand-dim">{label}</p>
    </div>
  );
}

interface CaseStudyMetaItemProps {
  label: string;
  value: string;
}

export function CaseStudyMetaItem({ label, value }: CaseStudyMetaItemProps) {
  return (
    <div>
      <p className="label-caps text-sand-dim mb-2">{label}</p>
      <p className="text-sm text-sand-dim leading-relaxed">{value}</p>
    </div>
  );
}

export function CaseStudyTags({ tags }: { tags: string[] }) {
  return (
    <div className="case-insight">
      <h3 className="font-newsreader text-lg text-sand mb-4">Design capabilities applied</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="case-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
