export default function TextArea({ className, commonClasses, ...props }) {
  return (
    <textarea
      className={`${className} min-h-[120px] ${commonClasses} resize-none`}
      {...props}
    />
  );
}
