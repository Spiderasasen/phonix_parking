
//button functions
const reportButton = document.getElementById("submitTicket");
const filterButton = document.getElementById("applyFilters");
const openBtn = document.getElementById("openSidebar");
const ticketDay = document.getElementById("ticket-day");
const ticketTime = document.getElementById("ticket-time");
const ticketLocation = document.getElementById("ticket-location");
const filterDay = document.getElementById("filter-day");
const inputTime = document.getElementById("filter-start");
const outputTime = document.getElementById("filter-end");

//for report ticket
reportButton.onclick = () =>{
    alert("Your report has been submitted.");
    openBtn.style.display = "block";
    ticketDay.value = "Select a Day";
    ticketTime.value = "";
    ticketLocation.value = "Select a Lot";
}

//for filter day
filterButton.onclick = () =>{
    alert("Filter has been applied");
    openBtn.style.display = "block";
    filterDay.value = "Any";
    inputTime.value = "";
    outputTime.value = "";
}
