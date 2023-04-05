import lookingIllustration from 'public/images/looking-illustration.svg';
import Image from 'next/image';
import Input from 'components/input';
import Button from 'components/button';
import { useState } from 'react';
import Dropdown from 'components/dropdown';
import DaysOfWorkSelect from 'components/select/days-of-work';
import ChipSelect from 'components/select/chipSelect';
const index = () => {
  const [techStack, setTechStack] = useState([]);
  const [companySizeOption, setCompanySizeOption] = useState(0);
  const [daysOfVacationOption, setDaysOfVacationOption] = useState(0);
  const [companyIndustryOption, setCompanyIndustryOption] = useState(0);
  const [selectedDaysOfWork, setSelectedDaysOfWork] = useState([1, 2, 3, 4, 5]);

  const companySizeOptions = [
    {
      id: 0,
      name: 'Small (0-20 workers)',
    },
    {
      id: 1,
      name: 'Medium (20-40 workers)',
    },
    {
      id: 2,
      name: 'Big (40+ workers)',
    },
  ];
  const daysOfVacationOptions = [
    {
      id: 0,
      name: '5',
    },
    {
      id: 1,
      name: '10',
    },
    {
      id: 2,
      name: '20',
    },
    {
      id: 3,
      name: '20+',
    },
  ];
  const companyIndustryOptions = [
    {
      id: 0,
      name: 'Solar',
    },
    {
      id: 1,
      name: 'Tech',
    },
    {
      id: 2,
      name: 'Crypto',
    },
  ];

  return (
    <div className="my-[80px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="max-w-[420px]">
            <div className="text-5xl font-medium mb-3 text-center">
              Create ticket
            </div>
            <div className="text-darkGray text-xl mb-[50px] text-center">
              Please fill in the inputs to create ticket and get matched to
              qualified, affordable developers!
            </div>
            <Input
              type="text"
              label="Position"
              className="mb-5"
              placeholder="Frontend"
            />
            <Input
              type="textarea"
              label="Short Description"
              placeholder="Description of position"
              className="mb-5"
            />
            <ChipSelect
              className="mb-5"
              label="Tech stack"
              selectedOptions={techStack}
              setSelectedOptions={setTechStack}
            />
            <Input
              type="text"
              label="Location"
              className="mb-5"
              placeholder="Prishtine, Kosova"
            />
            <DaysOfWorkSelect
              className="mb-5"
              label="Days of Work"
              selectedDaysOfWork={selectedDaysOfWork}
              setSelectedDaysOfWork={setSelectedDaysOfWork}
            />
            <Dropdown
              label="Days of paid vacation"
              className="mb-5"
              option={daysOfVacationOption}
              setOption={setDaysOfVacationOption}
              options={daysOfVacationOptions}
            ></Dropdown>
            <Dropdown
              label="Company size"
              className="mb-5"
              option={companySizeOption}
              setOption={setCompanySizeOption}
              options={companySizeOptions}
            ></Dropdown>
            <Input type="currency" label="Company Revenue" className="mb-5" />
            <Dropdown
              label="Company Industry"
              className="mb-5"
              option={companyIndustryOption}
              setOption={setCompanyIndustryOption}
              options={companyIndustryOptions}
            ></Dropdown>
            <Input type="currency" label="Desired Salary" className="mb-5" />
            <Button type="submit" className="w-full">
              Create Ticket
            </Button>
          </div>
          <div className="h-[550px] w-[400px]">
            <Image className="h-full w-full" src={lookingIllustration} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
