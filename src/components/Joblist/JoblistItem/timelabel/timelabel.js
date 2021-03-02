export const TimeLabel = (props) => {

  const one_day = 1000 * 60 * 60 * 24;
  const one_hour = 1000 * 60 * 60;

  const jobCreated = new Date(props.created);
  const elapsed = Date.now() - jobCreated;

  const days = Math.floor(elapsed / one_day);
  const hours = Math.round(elapsed / one_hour);

  return (
    <div className='job__time'>
      {elapsed > one_day
        ? `${days} day${days > 1 ? 's' : ''} ago`
        : `${hours} hour${hours > 1 ? 's' : ''} ago`}
    </div>
  );
};
