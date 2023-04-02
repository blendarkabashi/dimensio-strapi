import Interview from './components/Interview';
import JobSeeker from './components/JobSeeker';
import Ticket from './components/Ticket';
import types from './types';
import Router from 'next/router';

export default function Card({ ticket, jobSeeker, type, id }) {
  let cardContent;
  if (type === types.JOB_SEEKER)
    cardContent = <JobSeeker jobSeeker={jobSeeker} />;

  if (type === types.TICKET) cardContent = <Ticket ticket={ticket} />;

  if (type === types.INTERVIEW)
    cardContent = <Interview jobSeeker={jobSeeker} />;

  return (
    <div
      onClick={() => Router.push(`ticket/${id}`)}
      className="flex flex-col justify-between cursor-pointer h-[240px] border border-[#CBCBCB] bg-white rounded-[10px] p-5 transition-all hover:shadow-md hover:scale-105"
    >
      {cardContent}
    </div>
  );
}
