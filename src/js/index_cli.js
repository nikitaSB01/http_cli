async function fetchTickets() {
    try {
      const response = await axios.get("http://localhost:7070/?method=allTickets");
      const tickets = response.data;
  
      // Добавлено: вывод для проверки данных
      console.log("Tickets fetched:", tickets); // Выводим полученные данные
  
      // Проверка на пустой массив
      if (Array.isArray(tickets) && tickets.length === 0) {
        ticketContainer.textContent = "No tickets available."; // Сообщение о пустом массиве
      } else if (Array.isArray(tickets)) {
        tickets.forEach((ticket) => {
          const ticketElement = document.createElement("div");
          ticketElement.textContent = `${ticket.name} (Created: ${new Date(ticket.created).toLocaleString()})`;
          ticketContainer.appendChild(ticketElement);
        });
      } else {
        ticketContainer.textContent = "Unexpected response format."; // Если данные не массив
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  }