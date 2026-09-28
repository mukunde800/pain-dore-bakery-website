export default function SectionTitle({ title, subtitle, align = 'center' }) {
  const alignClass = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }[align];

  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-brun mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg">{subtitle}</p>
      )}
      <div
        className={`h-1 w-20 bg-dore mt-4 rounded-full ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}