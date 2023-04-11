import lookingIllustration from 'public/images/looking-illustration.svg';
import Image from 'next/image';
import Input from 'components/input';
import Button from 'components/button';
import { useState } from 'react';
import Dropdown from 'components/dropdown';
import DaysOfWorkSelect from 'components/select/days-of-work';
import ChipSelect from 'components/select/chipSelect';
import { useFormik } from 'formik';
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
      name: 'Effiecient Energy',
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

  const formik = useFormik({
    initialValues: {
      position: '',
      short_description: '',
      tech_stack: '',
      location: '',
      days_of_work: selectedDaysOfWork,
      days_of_paid_vacation: daysOfVacationOption,
      company_size: companySizeOption,
      company_revenue: '',
      company_industry: companyIndustryOption,
    },
    onSubmit: (values) => {
      console.log(formik);
      formik.setFieldValue('tech_stack', techStack);
      formik.setFieldValue('days_of_work', selectedDaysOfWork);
      formik.setFieldValue('days_of_paid_vacation', daysOfVacationOption);
      formik.setFieldValue('company_size', companySizeOption);
      formik.setFieldValue('company_industry', companyIndustryOption);

      console.log(selectedDaysOfWork);
      console.log(values.days_of_work);
      // const { username, password } = values;
      // Axios.post('auth/local', {
      //   identifier: username,
      //   password: password,
      // }).then((response) => {
      //   localStorage.setItem('jwt', response.data.jwt);
      //   localStorage.setItem('user', JSON.stringify(response.data));
      //   dispatch(setIsAuthenticated(true));
      //   dispatch(setUser(response.data));
      // });
    },
  });

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
            <form onSubmit={formik.handleSubmit}>
              <Input
                type="text"
                id="position"
                label="Position"
                className="mb-5"
                placeholder="Frontend"
                onChange={formik.handleChange}
                value={formik.values.position}
              />
              <Input
                type="textarea"
                id="short_description"
                label="Short Description"
                placeholder="Description of position"
                className="mb-5"
                onChange={formik.handleChange}
                value={formik.values.short_description}
              />
              <ChipSelect
                className="mb-5"
                id="tech_stack"
                label="Tech stack"
                selectedOptions={techStack}
                setSelectedOptions={(value) => setTechStack(value)}
                value={formik.values.tech_stack}
              />
              <Input
                type="text"
                id="location"
                label="Location"
                className="mb-5"
                placeholder="Prishtine, Kosova"
                onChange={formik.handleChange}
                value={formik.values.location}
              />
              <DaysOfWorkSelect
                className="mb-5"
                id="days_of_work"
                label="Days of Work"
                selectedDaysOfWork={selectedDaysOfWork}
                setSelectedDaysOfWork={(value) => setSelectedDaysOfWork(value)}
                value={formik.values.days_of_work}
              />
              <Dropdown
                label="Days of paid vacation"
                id="days_of_paid_vacation"
                className="mb-5"
                option={daysOfVacationOption}
                setOption={(option) => setDaysOfVacationOption(option)}
                options={daysOfVacationOptions}
                value={formik.values.days_of_paid_vacation}
              ></Dropdown>
              <Dropdown
                label="Company size"
                id="company_size"
                className="mb-5"
                option={companySizeOption}
                setOption={(option) => setCompanySizeOption(option)}
                options={companySizeOptions}
                value={formik.values.company_size}
              ></Dropdown>
              <Input
                id="company_revenue"
                type="currency"
                label="Company Revenue"
                className="mb-5"
                onChange={formik.handleChange}
                value={formik.values.company_revenue}
              />
              <Dropdown
                label="Company Industry"
                id="company_industry"
                className="mb-5"
                option={companyIndustryOption}
                setOption={(option) => setCompanyIndustryOption(option)}
                options={companyIndustryOptions}
                value={formik.values.company_industry}
              ></Dropdown>
              <Input
                id="desired_salary"
                type="currency"
                label="Desired Salary"
                className="mb-5"
                onChange={formik.handleChange}
                value={formik.values.desired_salary}
              />
              <Button type="submit" className="w-full">
                Create Ticket
              </Button>
            </form>
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
