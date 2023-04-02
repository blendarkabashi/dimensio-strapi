import Chip from 'components/chip';
import Moment from 'react-moment';
export default function Ticket({ ticket }) {
  return (
    <>
      <div>
        <Chip color={ticket.matches.data.length ? 'bg-orange' : 'bg-[#D9D9D9]'}>
          {ticket.matches.data.length}{' '}
          {ticket.matches.data.length == 1 ? 'match' : 'matches'}
        </Chip>
        <h1 className="text-lg mt-3 font-medium">{ticket.name}</h1>
        <p className="text-sm mt-2">{ticket.description}</p>
      </div>
      <p className="text-sm">
        <Moment format="DD.MM.YYYY">{ticket.createdAt}</Moment>
      </p>
    </>
  );
}
