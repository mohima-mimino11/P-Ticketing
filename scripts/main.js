// scrolltosection button
const scrollToTicketSectionBtn = getTheElementById('btn-to-ticket-section');
scrollToTicketSectionBtn.addEventListener('click', function(){
  const seatSelectionSection = getTheElementById('seat-booking-section');
  seatSelectionSection.scrollIntoView({ behavior: "smooth" });
})

const seatsInSeatsGrid = document.getElementsByClassName('seats');
console.log(seatsInSeatsGrid);
for(let seat of seatsInSeatsGrid){
  seat.addEventListener('click', function(){
    seatsId = seat.innerText;
    console.log(seatsId);
    addBackgroundColorById(seatsId)
    removeBackgroundColorById(seatsId)
    
  })
  
}


// seatsInSeatsGrid.addEventListener('click', function(){
//   console.log(seatsInSeatsGrid);
  
// })

