function sendOrder() {
  fetch("https://api.telegram.org/bot8677445268:AAGasyBNAWKMowF8ic835c5bSu0ZOh6WwGg/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: "5284242303",
      text: "🌱 New Order Received on your website!"
    })
  });

  alert("Order placed!");
}