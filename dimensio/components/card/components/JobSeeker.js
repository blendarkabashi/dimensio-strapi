import Button from 'components/button';
import Image from 'next/image';
import types from '../types';
import { strapi_base_url } from 'global/variables';

export default function JobSeeker({ jobSeeker }) {
  return (
    <>
      <div className="flex flex-row">
        {/* <Image
          className="inline-block rounded-full mr-4"
          width={50}
          height={50}
          alt={jobSeeker.name}
        /> */}
        <img
          className="inline-block rounded-full mr-4 h-12 w-12"
          src={strapi_base_url + jobSeeker.profile_picture.data.attributes.url}
          alt=""
        />
        <div className="flex flex-col">
          <span className=" text-sm">{jobSeeker.position}</span>
          <p className=" text-xl mt-auto">
            {jobSeeker.first_name + ' ' + jobSeeker.last_name}
          </p>
        </div>
      </div>
      <p className="text-sm mt-2">{jobSeeker.bio}</p>
      <div className="flex flex-row justify-between">
        <Button type="secondary" className="w-[110px] text-sm">
          View profile
        </Button>
        <Button className="w-[110px] text-sm">Interview</Button>
      </div>
    </>
  );
}
