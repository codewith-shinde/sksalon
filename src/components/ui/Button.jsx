import './Button.css';
import Icon from './Icon';

/**
 * Polymorphic button / link.
 * variant: primary | outline | ghost | dark
 * External links get rel="noopener noreferrer" automatically (security).
 */
export default function Button({
  as,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconRight,
  children,
  className = '',
  external,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button');
  const isExternal =
    external ?? (href ? /^https?:\/\//.test(href) : false);

  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();

  const linkProps =
    Tag === 'a'
      ? {
          href,
          ...(isExternal
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {}),
        }
      : { type: rest.type || 'button' };

  return (
    <Tag className={cls} {...linkProps} {...rest}>
      {icon && <Icon name={icon} size={size === 'lg' ? 20 : 18} className="btn__icon" />}
      <span className="btn__label">{children}</span>
      {iconRight && (
        <Icon
          name={iconRight}
          size={size === 'lg' ? 20 : 18}
          className="btn__icon btn__icon--right"
        />
      )}
    </Tag>
  );
}
