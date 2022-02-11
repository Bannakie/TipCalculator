let bill
let gratuity
let total
let rating
let guests

//number of guests served
//if (guests >= 6) {
    //total automatically includes tip
//}

document.getElementById("guests").value = "7"
document.getElementById("order").value = "230"

function submitInfo() {
    bill = document.getElementById("order").value
    guests = document.getElementById("guests").value
}
//calculate the tip
function calculateTip(bill) {
    return bill*.20;
}
//numinut needs to be gotten from html input
gratuity = calculateTip(bill)

function totalBill() {
    return bill + gratuity;
}

console.log(totalBill())
console.log(guests)

document.getElementById("final").value = "Your final restaurant bill is " + totalBill() + " for " + guests + " guests" 

//low rating 1 high rating 5-- show statement based on rating?
// only need to show actual total and guests and service quality DOES IT NEED TO BE INPUT??

//could do buttons for quality of service
// importing input from document 
/*Your question is a bit confusing, however based on my understanding of your question -

If you want to read value entered in a HTML text, in java script code use below -

         <html>
         <body>
         <script language="javascript" >

          function click_me()
          {
             var x=document.getElementById("numberInput").value;
             alert(x);
           }

        </script>

         Enter a number <input type="text" id="numberInput">
         <button onclick="click_me()">Click me</button>*/