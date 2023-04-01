const DaysOfWorkSelect = ({
  label,
  className,
  selectedDaysOfWork,
  setSelectedDaysOfWork,
}) => {
  const options = [
    {
      id: 0,
      name: 'Su',
    },
    {
      id: 1,
      name: 'Mo',
    },
    {
      id: 2,
      name: 'Tu',
    },
    {
      id: 3,
      name: 'We',
    },
    {
      id: 4,
      name: 'Th',
    },
    {
      id: 5,
      name: 'Fr',
    },
    {
      id: 6,
      name: 'Sa',
    },
  ];
  const handleSetOption = (clickedDay) => {
    if (selectedDaysOfWork.includes(clickedDay)) {
      setSelectedDaysOfWork(
        selectedDaysOfWork.filter((day) => day !== clickedDay)
      );
    } else {
      setSelectedDaysOfWork([...selectedDaysOfWork, clickedDay]);
    }
  };
  return (
    <div className={className}>
      <div className="mb-2">{label}</div>
      <div className="flex items-center">
        {options.map((day) => (
          <div
            key={day.id}
            onClick={() => handleSetOption(day.id)}
            className={`${
              selectedDaysOfWork.includes(day.id) && 'bg-blue text-white'
            } cursor-pointer rounded-md flex items-center justify-center mr-2 w-full h-[40px] border border-blue text-black`}
          >
            {day.name}
          </div>
        ))}
        {/* <div className="cursor-pointer rounded-md flex items-center justify-center mr-2 w-full h-[40px] border border-blue text-black">
          Su
        </div>
        <div className="rounded-md flex items-center justify-center mr-2 w-full h-[40px] bg-blue text-white">
          Mo
        </div>
        <div className="rounded-md flex items-center justify-center mr-2 w-full h-[40px] bg-blue text-white">
          Tu
        </div>
        <div className="rounded-md flex items-center justify-center mr-2 w-full h-[40px] bg-blue text-white">
          We
        </div>
        <div className="rounded-md flex items-center justify-center mr-2 w-full h-[40px] bg-blue text-white">
          Th
        </div>
        <div className="rounded-md flex items-center justify-center mr-2 w-full h-[40px] bg-blue text-white">
          Fr
        </div>
        <div className="rounded-md flex items-center justify-center w-full h-[40px] border border-blue text-black">
          Sa
        </div> */}
      </div>
    </div>
  );
};

export default DaysOfWorkSelect;
