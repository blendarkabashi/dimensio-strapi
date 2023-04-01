import CalendarMonth from '@mui/icons-material/CalendarMonth';

export default function Date({ className, commonClasses, ...props }) {
  return (
    <div className="relative">
      <input
        type="date"
        className={`${className} ${commonClasses} focus:ring-transparent focus:border-darkGray`}
        {...props}
      />
      <CalendarMonth className="h-5 text-blue absolute top-[10px] right-[10px] bg-white" />
    </div>
  );
}
