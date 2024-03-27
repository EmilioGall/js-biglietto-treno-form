// 1. Define Submit&Cancel Button constant

const submitBtn = document.getElementById("submit-btn"); // object | null

console.log(submitBtn, typeof submitBtn);

const cancelBtn = document.getElementById("cancel-btn"); // object | null

console.log(cancelBtn, typeof cancelBtn);

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

    let userAge = inputAge.value; // string

    console.log(userAge, typeof userAge); // ShowInConsole ageInput & TypeOfData


    // PROGRAM EXECUTION
  
    if (!isNaN(userKm) && userKm > 0) {

        // Entire price calculator
    
        let generatedPrice = userKm * 0.21; // Number
    
        console.log(generatedPrice, typeof generatedPrice); // ShowInConsole generatedPrice
    
        // Discounts calculator
    
        let discount = 0;
    
        if (userAge === "Under18") { // Boolean
    
            discount = 20; // Number
    
            document.getElementById("ticketOffer").innerHTML = `Ticket Discount Under18 - ${discount}%`;

        } else if (userAge === "Over65") { // Boolean
    
            discount = 40; // Number

            document.getElementById("ticketOffer").innerHTML = `Ticket Discount Over65 - ${discount}%`;

        } else if (userAge === "Adult") { // Boolean
    
            discount = 0; // Number

            document.getElementById("ticketOffer").innerHTML = ("Standard Ticket");

        } else if (userAge === "None") { // Boolean
    
            alert("Wrong data input!"); // String
    
        };
    
        console.log("discount in %", discount, typeof discount); // ShowInConsole discount
    
        const finalDiscount = generatedPrice * (discount / 100); // number
    
        console.log("discount in €", finalDiscount, typeof finalDiscount); // ShowInConsole finalDiscount
      
        const finalPrice = generatedPrice - finalDiscount; // number
    
        console.log("final price", finalPrice, typeof finalPrice); // ShowInConsole finalPrice
    
        // TICKET OUTPUT

        // Generate Car

        const car = Math.floor(Math.random() * 12) + 1; // number

        console.log(car); // number

        // Generate Code

        const cpCode = Math.floor(Math.random() * (99999 - 11111)) + 11111; // number

        console.log(cpCode);

        // Ticket reveal

        document.getElementById("ticket").classList.remove("hidden");

        // Print info

        document.getElementById("ticketName").innerHTML = userName;

        document.getElementById("ticketCar").innerHTML = car;
        
        document.getElementById("ticketCode").innerHTML = cpCode;

        // Price approximation

        let lastPrice = finalPrice.toFixed(2); // Approximation of finalPrice

        console.log(lastPrice, typeof lastPrice); // ShowInConsole lastPrice

        // Print Price
        
        document.getElementById("ticketPrice").innerHTML = `${lastPrice} &euro;`; // Print lastPrice
    
    } else {
    
        alert("Wrong data input!"); // String
    
    };

});

if (cancelBtn != null) {

    cancelBtn.addEventListener("click", function () {

      // Clean Input

      document.getElementById("userName").value = "";

      document.getElementById("userKm").value = "";

      document.getElementById("userAge").value = "";
  
      // Clean Ticket

      document.getElementById("ticketName").innerHTML = "";

      document.getElementById("ticketOffer").innerHTML = "";

      document.getElementById("ticketCar").innerHTML = "";
      
      document.getElementById("ticketCode").innerHTML = "";

      document.getElementById("ticketPrice").innerHTML = "";

      // Hide Ticket

      document.getElementById("ticket").classList.add("hidden");

    });
};
