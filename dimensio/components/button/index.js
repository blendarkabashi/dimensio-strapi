const Button = ({ type, children, className, onClick }) => {
  return (
    <button
      className={`${className} px-3 p-2 bg-blue text-white rounded-md font-normal`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
