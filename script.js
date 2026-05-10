function sendOrder() {
  const botToken = "8677445268:AAGasyBNAWKMowF8ic835c5bSu0ZOh6WwGg";
  const chatIds = [
    "5284242303", 
    "8196306889"
  ];

  const message = "🌱 New Order Received on your website!";

  chatIds.forEach(chatId => {
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });
  });

  alert("Order placed! Notifications sent.");
}