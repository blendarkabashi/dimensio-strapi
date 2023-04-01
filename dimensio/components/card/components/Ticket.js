import Chip from 'components/chip';

export default function Ticket({ ticket }) {
  return (
    <>
      <div>
        <Chip color={ticket.matches ? 'bg-orange' : 'bg-[#D9D9D9]'}>
          {ticket.matches} {ticket.matches == 1 ? 'match' : 'matches'}
        </Chip>
        <h1 className="text-lg mt-3 font-medium">{ticket.ticket_name}</h1>
        <p className="text-sm mt-2">{ticket.ticket_description}</p>
      </div>
      <p className="text-sm">{ticket.createdAt}</p>
    </>
  );
}
