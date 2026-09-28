import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'inline-block font-semibold px-6 py-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-dore hover:bg-pain text-white shadow-md hover:shadow-lg focus:ring-dore',
    secondary: 'bg-brun hover:bg-brown-700 text-creme focus:ring-brun',
    outline:
      'border-2 border-dore text-dore hover:bg-dore hover:text-white focus:ring-dore',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}