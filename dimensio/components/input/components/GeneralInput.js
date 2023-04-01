export default function GeneralInput({
  className,
  commonClasses,
  type,
  ...props
}) {
  return (
    <input type={type} className={`${className} ${commonClasses}`} {...props} />
  );
}
