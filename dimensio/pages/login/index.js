import hireIllustration from 'public/images/hire-illustration.svg';
import lookingIllustration from 'public/images/looking-illustration.svg';
import logo from 'public/images/logo.svg';
import Image from 'next/image';
import Input from 'components/input';
import Button from 'components/button';
import { useState } from 'react';
import ButtonSlider from 'components/buttonSlider';

const index = () => {
  const [activeButton, setActiveButton] = useState(1);

  const buttons = [
    {
      id: 1,
      name: 'Company',
    },
    { id: 2, name: 'Job Seeker' },
  ];

  return (
    <div className="my-[80px]">
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center">
          <Image src={logo}></Image>
        </div>
        <div className="flex items-center justify-between">
          <div className="max-w-[400px]">
            <div className="text-5xl font-medium mb-3 text-center">
              Welcome back!
            </div>
            <div className="text-darkGray text-xl mb-[50px] text-center">
              Please enter your details to log in.
            </div>
            <ButtonSlider
              buttons={buttons}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            ></ButtonSlider>
            <Input type="text" label="Email" className="mb-8" />
            <Input type="password" label="Password" className="mb-3" />
            <div className="text-right mb-8">
              <a href="#">Forgot Password?</a>
            </div>
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </div>
          <div className=" h-[550px] w-[400px]">
            <Image
              className="h-full w-full"
              src={activeButton == 1 ? hireIllustration : lookingIllustration}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
