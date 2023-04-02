const ButtonSlider = ({ buttons, activeButton, setActiveButton }) => {
  return (
    <div className="flex mb-10 border border-blue rounded-md">
      {buttons.map((button, index) => (
        <a
          key={index}
          onClick={() => setActiveButton(button.id)}
          className={`cursor-pointer w-1/2 text-center border-r p-2 ${
            activeButton == button.id ? 'text-white bg-blue' : ''
          }`}
        >
          {button.name}
        </a>
      ))}
    </div>
  );
};

export default ButtonSlider;
