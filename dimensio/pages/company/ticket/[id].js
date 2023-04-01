import TestDev from 'public/images/test-dev.png';
import EditIcon from '@mui/icons-material/Edit';
import Chip from 'components/chip';
import Layout from 'components/layout';
import Card from 'components/card';
import types from 'components/card/types';

export default function index() {
  return (
    <>
      <div className="bg-lightGray pt-12">
        <div className="container">
          <div className="flex flex-row justify-between items-center mb-4 border-b-[1px] border-black">
            <h1 className=" text-[28px]">Ticket 2</h1>
            <span className=" cursor-pointer">
              <EditIcon className="mr-2" />
              Edit
            </span>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h3 className=" text-lg mb-3">Short description</h3>
              <p className="  ">{ticket.content}</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {ticketData.map((data) => (
                <div className="flex flex-col mb-16">
                  <h3 className=" text-lg mb-3 ">{data.title}</h3>
                  <p className=" text-sm">{data.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Layout
        className="pb-24 pt-8"
        title={
          <div className="flex flex-row items-center ">
            Matches: <Chip className="bg-orange ml-4"> 3 matches</Chip>
          </div>
        }
      >
        <div className="grid grid-cols-4 gap-5">
          {ticket.matches.map((jobSeeker) => (
            <Card
              key={jobSeeker.name}
              jobSeeker={jobSeeker}
              type={types.JOB_SEEKER}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

const ticket = {
  title: 'Ticket 1',
  content:
    'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut, Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut, Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut, Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut, Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut, Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
  date: '12.02.2022',
  matches: [
    {
      name: 'Olta Gixhari',
      content:
        'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
      position: 'Frontend Developer',
      profilePic: TestDev,
    },
    {
      name: 'Olta Gixhari',
      content:
        'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
      position: 'Frontend Developer',
      profilePic: TestDev,
    },
    {
      name: 'Olta Gixhari',
      content:
        'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
      position: 'Frontend Developer',
      profilePic: TestDev,
    },
  ],
};

const ticketData = [
  { title: 'Position', content: 'Frontend developer' },
  { title: 'Tech stack', content: <Chip className="bg-blue"> Frontend</Chip> },
  { title: 'Work type', content: 'Hybrid' },
  { title: 'Days of work', content: 'Monday - Friday' },
  { title: 'Salary range', content: '2000$' },
  {
    title: 'Days of paid vacation',
    content: <Chip className="bg-blue">20 days</Chip>,
  },
];
