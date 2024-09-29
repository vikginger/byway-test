const getLatestReceivedMessage = messages => {
  const incomingMessages = messages.filter(msg => msg.sender !== 'Me');

  if (incomingMessages.length === 0) {
    return null;
  }

  const latestReceivedMessage = incomingMessages.reduce((latest, current) => {
    return new Date(current.timestamp) > new Date(latest.timestamp)
      ? current
      : latest;
  }, incomingMessages[0]);

  return latestReceivedMessage;
};

export default getLatestReceivedMessage;
