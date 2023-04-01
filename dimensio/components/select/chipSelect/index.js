import Chip from 'components/chip';
import StarBorderRounded from '@mui/icons-material/StarBorderRounded';
import StarRounded from '@mui/icons-material/StarRounded';
import { useEffect } from 'react';
const ChipSelect = ({
  className,
  label,
  selectedOptions,
  setSelectedOptions,
}) => {
  const handleAddChip = (event) => {
    if (event.key === 'Enter' && event.target.value.length > 0) {
      const value = event.target.value.trim();
      const alreadyExists = selectedOptions.some(
        (option) => option.name === value
      );
      if (!alreadyExists) {
        setSelectedOptions((prevState) => [
          ...prevState,
          {
            id: selectedOptions.length,
            name: value,
            yearsOfExperience: 1,
          },
        ]);
        setTimeout(() => {
          event.target.value = '';
        }, 1);
      }
    }
  };
  const removeChip = (chipToRemove) => {
    setSelectedOptions(
      selectedOptions.filter((chip) => chip.name !== chipToRemove)
    );
  };

  const calculateStars = (techStack) => {
    let stars = [];
    for (let i = 0; i < techStack.yearsOfExperience; i++) {
      stars.push(
        <StarRounded key={i} className="cursor-pointer text-orange w-7 h-7" />
      );
    }
    for (let i = techStack.yearsOfExperience; i < 5; i++) {
      stars.push(
        <StarBorderRounded
          key={i}
          className="cursor-pointer text-orange w-7 h-7"
        />
      );
    }
    return stars;
  };
  return (
    <div className={className}>
      <div className={`cursor-text`}>
        {label && <div className="mb-2">{label}</div>}
        <div
          onClick={() => document.querySelector('.tags-input').focus()}
          className={`flex flex-wrap items-center border-darkGray rounded-md w-full border px-3 py-2 bg-white py-0 min-h-[40px] outline-none `}
        >
          {selectedOptions.map((selection, index) => (
            <Chip
              color="bg-blue"
              key={index}
              className="text-white mr-1 my-1 text-base"
              closable
              removeChip={removeChip}
            >
              {selection.name}
            </Chip>
          ))}
          <input
            className="tags-input border-none outline-none h-full focus:ring-transparent focus:border-none w-[220px] p-0"
            type="text"
            placeholder="Add stack and press enter..."
            onKeyDown={(event) => handleAddChip(event)}
            // onInput={onInput}
            // onChange={onChange}
            // onKeyDown={onKeyDown}
            // value={value}
          />
        </div>
      </div>
      {/* {selectedOptions.length > 0 && (
        <div className="mt-5">
          <div className="flex items-center mb-2">
            <div className="w-1/3 font-medium">Tech Stack</div>
            <div className="w-2/3 font-medium">Years of Experience</div>
          </div>
          {selectedOptions.map((techStack) => (
            <div className="flex items-center">
              <div className="w-1/3">{techStack.name}</div>
              <div className="w-2/3 flex items-center">
                {calculateStars(techStack)}
              </div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default ChipSelect;
