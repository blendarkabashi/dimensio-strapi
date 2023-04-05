import lookingIllustration from 'public/images/looking-illustration.svg';
import logo from 'public/images/logo.svg';
import Image from 'next/image';
import Input from 'components/input';
import Button from 'components/button';
import { useState, useEffect } from 'react';
import ButtonSlider from 'components/buttonSlider';
import Dropdown from 'components/dropdown';
import DaysOfWorkSelect from 'components/select/days-of-work';
import ChipSelect from 'components/select/chipSelect';
import TechStackExperience from 'components/techStackExperience';
import MultiStepForm from 'components/multi-step-form';
import { useSelector } from 'react-redux';
import { allowAccess } from 'global/functions';
import { useRouter } from 'next/router';
const index = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [techStack, setTechStack] = useState([]);
  const [techStackExperience, setTechStackExperience] = useState([]);
  const [option, setOption] = useState(0);
  const [selectedDaysOfWork, setSelectedDaysOfWork] = useState([1, 2, 3, 4, 5]);

  const options = [
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

  const steps = [
    { id: 1, name: 'Job details', completed: true, href: '#' },
    { id: 2, name: 'Application form', completed: false, href: '#' },
    { id: 3, name: 'Preview', completed: false, href: '#' },
  ];
  return (
    <div className="my-[80px]">
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center">
          <Image src={logo}></Image>
        </div>
        <div className="flex items-center justify-between">
          <div className="min-w-[420px]">
            <div className="text-5xl font-medium mb-3 text-center">
              Create account
            </div>
            <div className="text-darkGray text-xl mb-[50px] text-center">
              Please fill in the inputs to register.
            </div>
            <div
              className="absolute top-0 right-0 hidden h-full w-5 md:block"
              aria-hidden="true"
            >
              <svg
                className="h-full w-full text-gray-300"
                viewBox="0 0 22 80"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 -2L20 40L0 82"
                  vectorEffect="non-scaling-stroke"
                  stroke="currentcolor"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <MultiStepForm
              steps={steps}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            >
              {currentStep == 1 ? (
                <div className="step">
                  <Input
                    type="file"
                    id="profile-picture"
                    label="Upload Profile Picture"
                    placeholder="Attach your profile picture"
                    className="mb-5"
                  />
                  <Input
                    type="textarea"
                    label="Biography"
                    placeholder="Write your bio"
                    className="mb-5"
                  />
                  <Input
                    type="text"
                    label="Full Name"
                    className="mb-5"
                    placeholder="Blendar Kabashi"
                  />
                  <Input type="date" label="Date of Birth" className="mb-5" />
                  <Input
                    type="text"
                    label="Location"
                    className="mb-5"
                    placeholder="Prishtine, Kosova"
                  />
                </div>
              ) : currentStep == 2 ? (
                <div className="step">step 2</div>
              ) : (
                <div className="step">step 3</div>
              )}
            </MultiStepForm>
            {/* <Input
              type="text"
              label="Email"
              className="mb-5"
              placeholder="Frontend Developer"
            />
            <Input type="password" label="Password" className="mb-5" />
            <Input
              type="textarea"
              label="Short Description"
              placeholder="Write your description"
              className="mb-5"
            />
            <Input type="currency" label="Desired Income" className="mb-5" />
            <Dropdown
              label="Choose your option"
              className="mb-5"
              option={option}
              options={options}
              setOption={setOption}
            ></Dropdown>
            <DaysOfWorkSelect
              className="mb-5"
              label="Days of Work"
              selectedDaysOfWork={selectedDaysOfWork}
              setSelectedDaysOfWork={setSelectedDaysOfWork}
            />
            <ChipSelect
              className="mb-5"
              label="Tech stack"
              selectedOptions={techStack}
              setSelectedOptions={setTechStack}
            />
            <Input type="date" label="Founding Date" className="mb-5" />
            <Input
              type="file"
              id="fileupload1"
              label="Upload Document"
              className="mb-5"
            /> */}
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
