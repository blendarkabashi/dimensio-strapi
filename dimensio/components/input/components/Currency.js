export default function Currency({
  commonClasses,
  className,
  placeholder,
  ...props
}) {
  return (
    <div className={className}>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="">$</span>
        </div>
        <input
          type="text"
          className={`block ${commonClasses} pl-7`}
          placeholder={placeholder ? placeholder : '0.00'}
          {...props}
        />
      </div>
    </div>
  );
}
