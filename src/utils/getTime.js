const getTime = date => {
  const dateObj = new Date(date);

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};

export default getTime;
