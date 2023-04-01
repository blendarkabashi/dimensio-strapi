import Close from '@mui/icons-material/Close';

const Chip = ({ color, children, className, closable, removeChip }) => {
  return (
    <span
      className={`${className} inline-flex items-center justify-between rounded px-2 py-0.5 text-xs font-medium text-center ${color} ${
        color == 'bg-[#D9D9D9]' ? 'text-black' : 'text-white'
      }`}
    >
      {children}
      {closable && (
        <span
          className="cursor-pointer ml-1"
          onClick={() => removeChip(children)}
        >
          <Close className="h-3 w-3 text-gray4" />
        </span>
      )}
    </span>
  );
};

export default Chip;
