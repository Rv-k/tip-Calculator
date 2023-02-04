let billInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let numberOfPeopleDiv = document.getElementById("numberOfPeople");
let perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

function calculateBill() {
    let bill = Number(billInput.value);
    let tipPercentage = Number(tipInput.value) / 100;
    let tipAmount = bill * tipPercentage;
    let totalBill = bill + tipAmount;
    let perPersonTotal = totalBill / numberOfPeople;
    perPersonTotalDiv.innerText = `₹${perPersonTotal.toFixed(2)}`;
}

const increasePeople = () => {
    numberOfPeople += 1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
};

const decreasePeople = () => {
    if (numberOfPeople <= 1) {
        return;
    }
    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople;
    calculateBill();
};