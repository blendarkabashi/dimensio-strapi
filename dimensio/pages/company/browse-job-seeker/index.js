import Card from 'components/card';
import types from 'components/card/types';
import Layout from 'components/layout';
import TestDev from 'public/images/test-dev.png';
import Axios from 'axiosInstance/instance';

export default function index({ jobSeekers }) {
  console.log(jobSeekers);
  return (
    <Layout title="Browse job seekers" withSearch>
      <div className="grid grid-cols-4 gap-5">
        {jobSeekers.map((jobSeeker) => (
          <Card
            key={jobSeeker.id}
            jobSeeker={jobSeeker}
            type={types.JOB_SEEKER}
          />
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const response = await Axios.get(`users?populate=deep,2`);
  return {
    props: {
      jobSeekers: response.data,
    },
  };
};

// const data = [
//   {
//     name: 'Olta Gixhari',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     position: 'Frontend Developer',
//     profilePic: TestDev,
//   },
//   {
//     name: 'Olta Gixhari',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     position: 'Frontend Developer',
//     profilePic: TestDev,
//   },
//   {
//     name: 'Olta Gixhari',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     position: 'Frontend Developer',
//     profilePic: TestDev,
//   },
//   {
//     name: 'Olta Gixhari',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     position: 'Frontend Developer',
//     profilePic: TestDev,
//   },
//   {
//     name: 'Olta Gixhari',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     position: 'Frontend Developer',
//     profilePic: TestDev,
//   },
//   {
//     name: 'Olta Gixhari',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     position: 'Frontend Developer',
//     profilePic: TestDev,
//   },
//   {
//     name: 'Olta Gixhari',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     position: 'Frontend Developer',
//     profilePic: TestDev,
//   },
//   {
//     name: 'Olta Gixhari',
//     content:
//       'Lorem ipsum dolor consectetur sir do adipiscing elit, sed do eiusmod tempor incididunt ut',
//     position: 'Frontend Developer',
//     profilePic: TestDev,
//   },
// ];
