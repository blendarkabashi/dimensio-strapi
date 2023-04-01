import Button from 'components/button';
import Image from 'next/image';

export default function Interview({ jobSeeker }) {
  return (
    <>
      <div div className="flex flex-row">
        <Image
          className="inline-block h-12 w-12 rounded-full mr-4"
          src={jobSeeker.profilePic}
          alt={jobSeeker.name}
        />
        <div className="flex flex-col">
          <span className=" text-sm">{jobSeeker.position}</span>
          <p className=" text-xl mt-auto">{jobSeeker.name}</p>
        </div>
      </div>
      <p className="text-sm mt-2">{jobSeeker.content}</p>
      <Button type="secondary" className="text-sm">
        View profile
      </Button>
    </>
  );
}
