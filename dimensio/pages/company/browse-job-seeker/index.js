import Card from 'components/card';
import types from 'components/card/types';
import Layout from 'components/layout';
import TestDev from 'public/images/test-dev.png';

export default function index() {
  return (
    <Layout title="Browse job seekers" withSearch>
      <div className="grid grid-cols-4 gap-5">
        {data.map((jobSeeker) => (
          <Card
            key={jobSeeker.name}
            jobSeeker={jobSeeker}
            type={types.JOB_SEEKER}
          />
        ))}
      </div>
    </Layout>
  );
}

const data = [
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
