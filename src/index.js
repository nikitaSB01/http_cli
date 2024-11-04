import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const ticketContainer = document.querySelector("#ticket-container");

  async function fetchTickets() {
    try {
      const response = await axios.get(
        "http://localhost:7070/?method=allTickets"
      );
      const tickets = response.data;

      // Добавлено: проверка на пустой массив
      if (tickets.length === 0) {
        ticketContainer.textContent = "No tickets available."; // Сообщение о пустом массиве
      } else {
        tickets.forEach((ticket) => {
          const ticketElement = document.createElement("div");
          ticketElement.textContent = `${ticket.name} (Created: ${new Date(
            ticket.created
          ).toLocaleString()})`;
          ticketContainer.appendChild(ticketElement);
        });
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  }

  fetchTickets();
});
