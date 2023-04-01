import UploadFile from '@mui/icons-material/UploadFile';

export default function FileUpload({
  commonClasses,
  placeholder,
  className,
  ...props
}) {
  return (
    <div className={`relative mt-2 rounded-md shadow-sm ${className}`}>
      <input type="file" {...props} hidden />
      <label for={props.id} className={`${commonClasses} block cursor-pointer`}>
        <span id="file-chosen" className="text-darkGray">
          {placeholder}
        </span>
      </label>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <UploadFile className="h-5" color="primary" />
      </div>
    </div>
  );
}
