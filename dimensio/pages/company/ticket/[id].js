import TestDev from 'public/images/test-dev.png';
import EditIcon from '@mui/icons-material/Edit';
import Chip from 'components/chip';
import Layout from 'components/layout';
import Card from 'components/card';
import types from 'components/card/types';
import Axios from 'axiosInstance/instance';

export default function index({ ticket }) {
  console.log(ticket);
  return (
    <>
      <div className="bg-lightGray pt-12">
        <div className="container">
          <div className="flex flex-row justify-between items-center mb-4 border-b-[1px] border-black">
            <h1 className=" text-[28px]">{ticket.name}</h1>
            <span className=" cursor-pointer">
              <EditIcon className="mr-2" />
              Edit
            </span>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h3 className=" text-lg mb-3">Short description</h3>
              <p className="  ">{ticket.description}</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {ticketData.map((data) => (
                <div className="flex flex-col mb-16">
                  <h3 className=" text-lg mb-3 ">{data.label}</h3>
                  <p className=" text-sm">{ticket[data.value]}</p>
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
          {matches.map((jobSeeker, index) => (
            <Card key={index} jobSeeker={jobSeeker} type={types.JOB_SEEKER} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const response = await Axios.get(`tickets/${params.id}?populate=*`);
  return {
    props: {
      ticket: response.data.data.attributes,
    },
  };
};

// const ticket = {
//   title: 'Ticket 1',
//   content:
//     'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut, Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut, Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut, Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut, Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut, Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//   date: '12.02.2022',
const matches = [
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
];
// };

const ticketData = [
  { value: 'position', label: 'Position' },
  { value: 'days_of_work', label: 'Days of Work' },
  { value: 'work_type', label: 'Work Type' },
];
