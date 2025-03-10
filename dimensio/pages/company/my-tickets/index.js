import Image from 'next/image';
import Layout from 'components/layout';
import Card from 'components/card';
import Button from 'components/button';
import NoTicketsIcon from 'public/images/no-tickets.svg';
import types from 'components/card/types';
import Axios from 'axiosInstance/instance';
import { useEffect, useState } from 'react';
import withAuth from 'hoc/withAuth';

const index = ({ tickets }) => {
  // const [data, setData] = useState([]);
  return (
    <>
      {tickets.length === 0 ? (
        <NoTickets />
      ) : (
        <Layout title="My tickets">
          <div className="grid grid-cols-4 gap-5">
            {tickets.map((ticket) => (
              <Card
                id={ticket.id}
                key={ticket.id}
                ticket={ticket.attributes}
                type={types.TICKET}
              />
            ))}
          </div>
        </Layout>
      )}
    </>
  );
};

const NoTickets = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center pt-24">
      <h1 className="text-[37px]">You currently have no tickets</h1>
      <Button className="mt-7 px-8">Create ticket</Button>
      <Image className="mt-20" src={NoTicketsIcon} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await Axios.get(`tickets?populate=deep`);
  return {
    props: {
      tickets: response.data.data,
    },
  };
};

export default withAuth(index);
// const data = [
//   {
//     title: 'Ticket 1',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     date: '12.02.2022',
//     matches: 3,
//   },
//   {
//     title: 'Ticket 12',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     date: '12.02.2022',
//     matches: 2,
//   },
//   {
//     title: 'Ticket 3',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     date: '12.02.2022',
//     matches: 0,
//   },
//   {
//     title: 'Ticket 4',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     date: '12.02.2022',
//     matches: 1,
//   },
//   {
//     title: 'Ticket 5',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     date: '12.02.2022',
//     matches: 0,
//   },
//   {
//     title: 'Ticket 6',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     date: '12.02.2022',
//     matches: 5,
//   },
//   {
//     title: 'Ticket 7',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     date: '12.02.2022',
//     matches: 2,
//   },
//   {
//     title: 'Ticket 8',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     date: '12.02.2022',
//     matches: 0,
//   },
// ];
