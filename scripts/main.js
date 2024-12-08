// scrolltosection button
const scrollToTicketSectionBtn = getTheElementById('btn-to-ticket-section');
scrollToTicketSectionBtn.addEventListener('click', function(){
  const seatSelectionSection = getTheElementById('seat-booking-section');
  seatSelectionSection.scrollIntoView({ behavior: "smooth" });
})

const seatsInSeatsGrid = document.getElementsByClassName('seats');
// console.log(seatsInSeatsGrid);
for(let seat of seatsInSeatsGrid){
  seat.addEventListener('click', function(){
    seatsId = seat.innerText;
    // console.log(seatsId);
    // add background color and remove default background color in selected seats
    addBackgroundColorById(seatsId);
    removeBackgroundColorById(seatsId);
    // If a seat is selected and phone number is given only then the “Next” button on form submission will be enabled otherwise the button will be disabled by default
    const phoneElement = getTheElementById('phone-number');
    // console.log(phoneElement.value);
    if(phoneElement.value !== ''){
      removeAttributeById('seat-confirm-btn');
    }
    
     
    // show hown many seats are selected and how many are left after user selects some seats
    // available seats will decrease by 1
    let seatsLeft = getElementTextById('seats-left');
    seatsLeft--;
    // available seats innertext will be updated
    setElementTextById('seats-left', seatsLeft)
    // seats number of selected seats will increase by 1
    let seatsNumber = getElementTextById('seats-number');
    seatsNumber++;
    // seat nummber will be updated
    setElementTextById('seats-number', seatsNumber);
   
    



    //  if 4 seats are selected together by a user and phone number is given then enable the  “Apply” button for coupon code.
    if(seatsNumber >= 4 && phoneElement.value !== ''){
      removeAttributeById('coupon-btn');
      seatsNumber === 4;
      // A user can select at max 4 seats not more than this if a user does that show them a alert message.
      if(seatsNumber > 4){
        
        keepBackgroundColorById(seatsId);
        setElementTextById('seats-left', 36)
        setElementTextById('seats-number', 4);
        alert('You cannot select more than four seats!Please apply your coupon if you have any and click the apply button to verify your coupon.');
      }
    }
    
    // Append seat, class, and price elements divs
    appendElementById('append-parent', 'append-item')

    // update total price and grand total
    const ticketPriceDefault = getElementTextById('price-list');
    const totalPrice = seatsNumber * ticketPriceDefault;
    setElementTextById('total-price', totalPrice)
    const grandTotalPrice = totalPrice;
    setElementTextById('grand-total-price', grandTotalPrice);
    const couponApplyBtn = getTheElementById('coupon-btn');
    // console.log(couponApplyBtn.innerText);
    couponApplyBtn.addEventListener('click', function(){
      const couponTextElement = getTheElementById('coupon-text');
      // console.log(couponTextElement.value);
      // after giving valid coupon code (New15, Couple 20) the coupon code section should be hidden and discounted price should be considered and grand total should be updated.
      if(couponTextElement.value === 'NEW15'){
        const discountedPrice = totalPrice * (15 / 100);
        let grandTotalPrice = totalPrice - discountedPrice;
        setElementTextById('grand-total-price', Math.round(grandTotalPrice));
        hideElementById('hide-after-valid-coupon');
      }else if(couponTextElement.value === 'Couple20'){
        const discountedPrice = totalPrice * (20 / 100);
        let grandTotalPrice = totalPrice - discountedPrice;
        setElementTextById('grand-total-price', Math.round(grandTotalPrice));
        hideElementById('hide-after-valid-coupon');
      }else{
        // If a user give invalid coupon code show them an alert
        alert('your coupon is not valid!')
      }
    })
    if(seatsNumber > 0 && phoneElement.value !== ''){
      const seatConfirmBtn = getTheElementById('seat-confirm-btn');
      // if seatconfirmation next button is clicked user will be directed modal section all other sections will be hidden
      seatConfirmBtn.addEventListener('click', function(){
        hideElementById('banner-section');
        hideElementById('offers-section');
        hideElementById('seat-booking-section');
        hideElementById('footer-section');
        showElementById('modal-section');

      })
    }else{
        showElementById('banner-section');
        showElementById('offers-section');
        showElementById('seat-booking-section');
        showElementById('footer-section');
        hideElementById('modal-section');
      
    }
    
    
    
    

    
    
    
    
    
    
  })
  
}








