interface CaseStudyFigureProps {
  src: string;
  alt: string;
  caption?: string;
  size?: 'default' | 'medium' | 'small';
}

const sizeClass = {
  default: 'max-w-3xl',
  medium: 'max-w-2xl',
  small: 'max-w-xl',
};

export default function CaseStudyFigure({
  src,
  alt,
  caption,
  size = 'default',
}: CaseStudyFigureProps) {
  return (
    <figure className={`${sizeClass[size]} mx-auto`}>
      <div className="rounded-sm bg-image-placeholder overflow-hidden">
        <img src={src} alt={alt} className="w-full h-auto" />
      </div>
      {caption && (
        <figcaption className="text-center text-sm italic text-sand-dim mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
