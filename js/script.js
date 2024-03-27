// 1. Define Submit Button constant

const submitBtn = document.getElementById("submit-btn"); // object | null

console.log(submitBtn, typeof submitBtn);

// 2. Add Event listener to the Button

submitBtn.addEventListener("click", function() {
  
    // DATA COLLECTION

    // Name Input
    const inputName = document.getElementById("userName"); // object | null

    console.log(inputName, typeof inputName); // ShowInConsole nameInput & TypeOfData

    let userName = inputName.value; // string

    console.log(userName, typeof userName); // ShowInConsole nameValue & TypeOfData
  
    // Km Input
    let inputKm = document.getElementById("userKm"); // object | null

    console.log(inputKm, typeof inputKm); // ShowInConsole kmInput & TypeOfData

    let Km = inputKm.value; // string

    let userKm = parseInt(Km); // number

    console.log(userKm, typeof userKm); // ShowInConsole nameValue & TypeOfData

    // Age Input
    let inputAge = document.getElementById("userAge"); // object | null

    console.log(inputAge, typeof inputAge); // ShowInConsole kmInput & TypeOfData

    let Age = inputAge.value; // string

    let userAge = parseInt(Age); // number

    console.log(userAge, typeof userAge); // ShowInConsole ageInput & TypeOfData


    // PROGRAM EXECUTION
  
    if (isNaN(userKm) === false && isNaN(userAge) === false && userKm > 0 && userAge > 0) {

        // Entire price calculator
    
        let generatedPrice = userKm * 0.21; // Number
    
        console.log(generatedPrice, typeof generatedPrice); // ShowInConsole generatedPrice
    
        // Discounts calculator
    
        let discount = 0;
    
        if ((userAge < 18) && (userAge > 12)) { // Boolean
    
            discount = 20; // Number
    
        } else if (userAge > 65) { // Boolean
    
            discount = 40; // Number
    
        } else if (userAge < 12) { // Boolean
    
            alert("You are too young to purchase a ticket, please ask your parents for support."); // String
    
        };
    
        console.log("discount in %", discount, typeof discount); // ShowInConsole discount
    
        const finalDiscount = generatedPrice * (discount / 100); // number
    
        console.log("discount in €", finalDiscount, typeof finalDiscount); // ShowInConsole finalDiscount
      
        const finalPrice = generatedPrice - finalDiscount; // number
    
        console.log("final price", finalPrice, typeof finalPrice); // ShowInConsole finalPrice
    
        // PRICE OUTPUT
    
        // Price approximation

        if (discount === 20) { // Boolean
    
            document.getElementById("ticketOffer").innerHTML = ("Ticket Discount Under18");
    
        } else if (discount === 40) { // Boolean
    
            document.getElementById("ticketOffer").innerHTML = ("Ticket Discount Over65");
    
        } else {
    
            document.getElementById("ticketOffer").innerHTML = ("Standard Ticket");
    
        };
    
        let lastPrice = finalPrice.toFixed(2); // Approximation of finalPrice
    
        console.log(lastPrice, typeof lastPrice); // ShowInConsole lastPrice
    
        document.getElementById("ticketPrice").innerHTML = lastPrice; // Print lastPrice
    
    } else {
    
        alert("Wrong data input!"); // String
    
    };



});