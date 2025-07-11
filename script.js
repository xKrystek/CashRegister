const button = document.getElementById("purchase-btn");
const changeDueInfo = document.getElementById("change-due");
const input = document.getElementById("cash");

let changeDueList = [];

let price = 1.41;
let cid = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.10],
  ["QUARTER", 0.25],
  ["ONE", 1.00],
  ["FIVE", 0.00],
  ["TEN", 0.00],
  ["TWENTY", 0.00],
  ["ONE HUNDRED", 0.00]
]

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
  let sumOfChange = 0;
  while (change >= 100 && cid[8][1] != 0) {
    cid[8][1] -= 100;
    hundreds += 1;
    change = (Math.round(change * 100) - 10000) / 100;
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
    cid[4][1] -= 1;
    ones += 1;
    change = (Math.round(change * 100) - 100) / 100;
  }
  while (change >= 0.25 && cid[3][1] != 0) {
    cid[3][1] = (cid[3][1] * 100 - 25) / 100;
    quarters += 1;
    change = (Math.round(change * 100) - 25) / 100;
  }
  while (change >= 0.1 && cid[2][1] != 0) {
    cid[2][1] = (cid[2][1] * 100 - 10) / 100;
    dimes += 1;
    change = (Math.round(change * 100) - 10) / 100;
  }
  while (change >= 0.05 && cid[1][1] != 0) {
    cid[1][1] = (cid[1][1] * 100 - 5) / 100;
    nickels += 1;
    change = (Math.round(change * 100) - 5) / 100;
  }
  while (change >= 0.01 && cid[0][1] != 0) {
    cid[0][1] = (cid[0][1] * 100 - 1) / 100;
    pennies += 1;
    change = (Math.round(change * 100) - 1) / 100;
  }
  if (change != 0)
    return (changeDueInfo.textContent = "Status: INSUFFICIENT_FUNDS");
  if (hundreds != 0) {
    changeDueList.push("ONE HUNDRED: $100");
    sumOfChange += 100;
  }
  if (twenties != 0) {
    changeDueList.push(`TWENTY: $${twenties * 20}`);
    sumOfChange += twenties * 20;
  }
  if (tens != 0) {
    changeDueList.push(`TEN: $${tens * 10}`);
    sumOfChange += tens * 10;
  }
  if (fives != 0) {
    changeDueList.push(`FIVE: $${fives * 5}`);
    sumOfChange += fives * 5;
  }
  if (ones != 0) {
    changeDueList.push(`ONE: $${ones * 1}`);
    sumOfChange += ones * 1;
  }
  if (quarters != 0) {
    changeDueList.push(`QUARTER: $${quarters * 0.25}`);
    sumOfChange = Math.round(sumOfChange + quarters * 25) / 100;
  }
  if (dimes != 0) {
    changeDueList.push(`DIME: $${dimes * 0.1}`);
    sumOfChange = Math.round(sumOfChange + dimes * 10) / 100;
  }
  if (nickels != 0) {
    changeDueList.push(`NICKEL: $${nickels * 0.05}`);
    sumOfChange = Math.round(sumOfChange + nickels * 5) / 100;
  }
  if (pennies != 0) {
    changeDueList.push(`PENNY: $${pennies * 0.01}`);
    sumOfChange = Math.round(sumOfChange + pennies * 1) / 100;
  }
  if (sumOfChange > change) {
    let changeDue = change;
    while (changeDue >= 100 && hundreds != 0) {
      hundreds -= 1;
      changeDue = (Math.round(changeDue * 100) - 10000) / 100;
    }
    while (changeDue >= 20 && twenties != 0) {
      twenties -= 1;
      changeDue = (Math.round(changeDue * 100) - 2000) / 100;
    }
    while (changeDue >= 10 && tens != 0) {
      tens -= 1;
      changeDue = (Math.round(changeDue * 100) - 1000) / 100;
    }
    while (changeDue >= 5 && fives != 0) {
      fives -= 1;
      changeDue = (Math.round(changeDue * 100) - 500) / 100;
    }
    while (changeDue >= 1 && ones != 0) {
      ones -= 1;
      changeDue = (Math.round(changeDue * 100) - 100) / 100;
    }
    while (changeDue >= 0.25 && quarters != 0) {
      quarters -= 1;
      changeDue = (Math.round(changeDue * 100) - 25) / 100;
    }
    while (changeDue >= 0.1 && dimes != 0) {
      dimes -= 1;
      changeDue = (Math.round(changeDue * 100) - 10) / 100;
    }
    while (changeDue >= 0.05 && nickels != 0) {
      nickels -= 1;
      changeDue = (Math.round(changeDue * 100) - 5) / 100;
    }
    while (changeDue >= 0.01 && pennies != 0) {
      pennies -= 1;
      changeDue = (Math.round(changeDue * 100) - 1) / 100;
    }
    if(changeDue !== 0) return changeDueInfo.textContent = "Status: INSUFFICIENT_FUNDS";
  }
  if (sumOfChange < change) {
    changeDueInfo.textContent = `Status: CLOSED ${changeDueList.join(" ")}`;
    return true;
  } else changeDueInfo.textContent = `Status: OPEN ${changeDueList.join(" ")}`;
}

function purchase() {
  const moneyGiven = Number(input.value);
  console.log(moneyGiven, "input cash");

  const sumOfCash = cid
    .map((value) => value[1] * 100)
    .reduce((curr, acc) => {
      return curr + acc;
    });
  console.log(sumOfCash / 100);

  const change = (moneyGiven * 100 - price * 100) / 100;

  console.log(change);

  if (moneyGiven < price) {
    changeDueInfo.textContent = "Status: INSUFFICIENT_FUNDS";
    return alert("Customer does not have enough money to purchase the item");
  }
  if (moneyGiven === price)
    return (changeDueInfo.textContent =
      "No change due - customer paid with exact cash");

  const result = chooseChange(change);

  if (result) return;

  if (sumOfCash / 100 < change)
    return (changeDueInfo.textContent = "Status: INSUFFICIENT_FUNDS");

  if (change === sumOfCash / 100)
    changeDueInfo.textContent = `Status: CLOSED ${changeDueList.join(" ")}`;

  input.value = "";
}

button.addEventListener("click", purchase);
