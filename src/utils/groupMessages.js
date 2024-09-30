const groupMessages = messages => {
  const groupedMessages = [];

  messages.forEach(message => {
    // Ищем существующую группу с тем же отправителем и временной меткой
    const group = groupedMessages.find(
      g => g.sender === message.sender && g.timestamp === message.timestamp
    );

    if (group) {
      group.messages.push({
        id: message.id,
        text: message.text,
      });
    } else {
      groupedMessages.push({
        sender: message.sender,
        timestamp: message.timestamp,
        messages: [
          {
            id: message.id,
            text: message.text,
          },
        ],
      });
    }
  });

  return groupedMessages;
};

export default groupMessages;
