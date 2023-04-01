import ArrowBack from '@mui/icons-material/ArrowBack';
import Edit from '@mui/icons-material/EditOutlined';
import Tabs from 'components/tabs';
import { useState } from 'react';
import Calendar from '@mui/icons-material/CalendarMonth';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import InsertDriveFileOutlined from '@mui/icons-material/InsertDriveFileOutlined';

const index = () => {
  const tabs = [
    { id: 0, name: 'Personal Info' },
    { id: 1, name: 'Work Info' },
    { id: 2, name: 'Experience' },
    { id: 3, name: 'Education' },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <div className="bg-blue h-[240px] py-[50px] -mb-24">
        <div className="container">
          <a href="" className="flex items-center text-white">
            <ArrowBack className="mr-2" />
            Back
          </a>
        </div>
      </div>
      <div className="container relative">
        <div className="flex justify-between mb-10">
          <div className="flex items-end">
            <div className="rounded-full bg-lightGray border border-blue h-[220px] w-[220px] mr-8"></div>
            <div className="pb-8">
              <div>Frontend Developer</div>
              <div className="font-medium text-4xl">Blendar Kabashi</div>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mt-16">
            <Edit className="text-orange mr-2" />
            Edit
          </div>
        </div>
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        {currentTab == 0 ? (
          <div className="w-1/2">
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Biography</div>
              <div className="">
                Lorem ipsum dolor consectetur sir do adipiscing elit, sed do
                eiusmod tempor incididunt ut Lorem ipsum dolor consectetur sir
                do adipiscing elit, sed do eiusmod tempor incididunt ut Lorem
                ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod
                tempor incididunt ut.
              </div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Full Name</div>
              <div className="">Dummy Inc</div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Date of Birth</div>
              <div className="flex items-center">
                <Calendar className="text-orange mr-2" />
                10.02.2006
              </div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Location</div>
              <div className="">Prishtina, Kosovo</div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Phone Number</div>
              <div className="">049487720</div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Languages</div>
              <div className="">Albanian (primary language)</div>
              <div className="">English (second language)</div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Email</div>
              <div className="">blendar.h.kabashi@gmail.com</div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Social Media</div>
              <div className="flex items-center">
                <LinkedIn className="text-orange mr-2 cursor-pointer" />
                <Facebook className="text-orange mr-2 cursor-pointer" />
                <Twitter className="text-orange mr-2 cursor-pointer" />
                <Instagram className="text-orange cursor-pointer" />
              </div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Resume</div>
              <div className="flex flex-col">
                <a href="#" className="text-blue underline flex items-center">
                  <InsertDriveFileOutlined className="mr-2" />
                  Blendar Kabashi CV.pdf
                </a>
              </div>
            </div>
          </div>
        ) : currentTab == 1 ? (
          <>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Position</div>
              <div className="">Frontend Developer</div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Hours per day</div>
              <div className="">8 hours</div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Days of Work</div>
              <div className="flex items-center">
                <div className="rounded-md flex items-center justify-center mr-2 w-[40px] h-[40px] border border-blue text-black">
                  Su
                </div>
                <div className="rounded-md flex items-center justify-center mr-2 w-[40px] h-[40px] bg-blue text-white">
                  Mo
                </div>
                <div className="rounded-md flex items-center justify-center mr-2 w-[40px] h-[40px] bg-blue text-white">
                  Tu
                </div>
                <div className="rounded-md flex items-center justify-center mr-2 w-[40px] h-[40px] bg-blue text-white">
                  We
                </div>
                <div className="rounded-md flex items-center justify-center mr-2 w-[40px] h-[40px] bg-blue text-white">
                  Th
                </div>
                <div className="rounded-md flex items-center justify-center mr-2 w-[40px] h-[40px] bg-blue text-white">
                  Fr
                </div>
                <div className="rounded-md flex items-center justify-center w-[40px] h-[40px] border border-blue text-black">
                  Sa
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Desired Income</div>
              <div className="">$2000</div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Tech Stack</div>
              <div className="flex items-center">
                <div className="px-2 py-1 rounded-md flex items-center justify-center mr-2 bg-blue text-white">
                  Frontend
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Skills</div>
              <div className="flex items-center">
                <div className="px-2 py-1 rounded-md flex items-center justify-center mr-2 bg-blue text-white">
                  Javascript
                </div>
                <div className="px-2 py-1 rounded-md flex items-center justify-center mr-2 bg-blue text-white">
                  HTML
                </div>
                <div className="px-2 py-1 rounded-md flex items-center justify-center mr-2 bg-blue text-white">
                  CSS
                </div>
              </div>
            </div>
          </>
        ) : currentTab == 2 ? (
          <>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Frontend Developer</div>
              <div className="mb-2">Rrota Creative Studio</div>
              <div className="">Oct 2021 - Present</div>
            </div>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">Frontend Developer</div>
              <div className="mb-2">Rrota Creative Studio</div>
              <div className="">Oct 2021 - Present</div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <div className="font-medium text-xl mb-2">
                Computer Science and Engineering
              </div>
              <div className="mb-2">University for Business and Technology</div>
              <div className="">Oct 2016 - Oct 2019</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default index;
