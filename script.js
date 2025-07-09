const button = document.getElementById("purchase-btn");
const changeDueInfo = document.getElementById("change-due");
const input = document.getElementById("cash");

let changeDueList = [];

let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

let cash = Number(input.value);

function chooseChange(change) {
  changeDueList = [];
  changeDueInfo.textContent = "";
  let hundreds = 0;
  let twenties = 0;
  let tens = 0;
  let fives = 0;
  let ones = 0;
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;
  while (change >= 100 && cid[8][1] != 0) {
    cid[8][1] -= 100;
    hundreds += 1;
    change = (Math.round(change * 100) - 2000) / 100;
  }
  while (change >= 20 && cid[7][1] != 0) {
    cid[7][1] -= 20;
    twenties += 1;
    change = (Math.round(change * 100) - 2000) / 100;
  }
  while (change >= 10 && cid[6][1] != 0) {
    cid[6][1] -= 10;
    tens += 1;
    change = (Math.round(change * 100) - 1000) / 100;
  }
  while (change >= 5 && cid[5][1] != 0) {
    cid[5][1] -= 5;
    fives += 1;
    change = (Math.round(change * 100) - 500) / 100;
  }
  while (change >= 1 && cid[4][1] != 0) {
cid[4][1] -= 1
    ones += 1;
    change = (Math.round(change * 100) - 100) / 100;
  }
  while (change >= 0.25 && cid[3][1] != 0) {
    cid[3][1] = (cid[3][1]*100 - 25) / 100;
    quarters += 1;
    change = (Math.round(change * 100) - 25) / 100;
  }
  while (change >= 0.1 && cid[2][1] != 0) {
    cid[2][1] = (cid[2][1]*100 - 10) / 100;
    dimes += 1;
    change = (Math.round(change * 100) - 10) / 100;
  }
  while (change >= 0.05 && cid[1][1] != 0) {
    cid[1][1] = (cid[1][1]*100 - 5) / 100;
    nickels += 1;
    change = (Math.round(change * 100) - 5) / 100;
  }
  while (change >= 0.01 && cid[0][1] != 0) {
    cid[0][1] = (cid[0][1]*100 - 1) / 100;
    pennies += 1;
    change = (Math.round(change * 100) - 1) / 100;
  }
  if (hundreds != 0) changeDueList.push("Status: OPEN ONE HUNDRED: $100");
  if (twenties != 0) changeDueList.push(`Status: OPEN TWENTY: $${twenties * 20}`);
  if (tens != 0) changeDueList.push(`Status: OPEN TEN: $${tens * 10}`);
  if (fives != 0) changeDueList.push(`Status: OPEN FIVE: $${fives * 5}`);
  if (ones != 0) changeDueList.push(`Status: OPEN ONE: $${ones * 1}`);
  if (quarters != 0) changeDueList.push(`Status: OPEN QUARTER: $${quarters * 0.25}`);
  if (dimes != 0) changeDueList.push(`Status: OPEN DIME: $${dimes * 0.1}`);
  if (nickels != 0) changeDueList.push(`Status: OPEN NICKEL: $${nickels * 0.05}`);
  if (pennies != 0) changeDueList.push(`Status: OPEN PENNY: $${pennies * 0.01}`);
  changeDueInfo.textContent = `${changeDueList.join(" ")}`;
}

function purchase() {
  const moneyGiven = Number(input.value);
  console.log(moneyGiven, "input cash");

  const sumOfCash = cid.map(value => value[1] * 100).reduce((curr, acc) => {
    return curr + acc;
  });
  console.log(sumOfCash/ 100);

  const change = (moneyGiven * 100 - price * 100) / 100;

  console.log(change);

  if(moneyGiven < price){
    changeDueInfo.textContent = "Status: INSUFFICIENT_FUNDS";
    return alert("Customer does not have enough money to purchase the item");
  }
  if(moneyGiven === price) return changeDueInfo.textContent = "No change due - customer paid with exact cash"
  if(sumOfCash < moneyGiven) return changeDueInfo.textContent = "Status: INSUFFICIENT_FUNDS"

  chooseChange(change);

  input.value = "";
}

button.addEventListener("click", purchase);
