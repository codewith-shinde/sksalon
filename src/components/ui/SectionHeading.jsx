import './SectionHeading.css';
import Reveal from './Reveal';

/**
 * Consistent editorial section heading.
 * props: eyebrow, title, subtitle, align (left|center), light (for dark bg), id
 * `title` may contain an <em> — style it via .gold-text by wrapping in props.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  as = 'h2',
  id,
}) {
  const Tag = as;
  return (
    <div
      className={`sec-head sec-head--${align} ${light ? 'sec-head--light' : ''}`}
    >
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${align === 'center' ? 'eyebrow--center' : ''}`}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <Tag className="sec-head__title" id={id}>
          {title}
        </Tag>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="sec-head__subtitle">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
