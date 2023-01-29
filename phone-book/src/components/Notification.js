const Notification = ({ message, error }) => {
  if (message === '') {
    return null;
  }

  return (
    <div className={error ? 'error' : 'sucess'}>{message}</div>
  );
};

export default Notification