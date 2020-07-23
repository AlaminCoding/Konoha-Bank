// Deposit Functionality
var depositBtn = document.getElementById("d-btn");
depositBtn.addEventListener("click", function () {
  // Get Initial net amount
  var netAmount = parseInt(document.getElementById("balance-amount").innerHTML);
  // Get Initial deposit amount
  var depositAmount = parseInt(
    document.getElementById("deposit-amount").innerHTML
  );
  // Catch deposit input
  var depositInput = parseInt(document.getElementById("deposit-input").value);
  // Calculate Amount
  var netSum = netAmount + depositInput;
  var netDeposit = depositAmount + depositInput;
  // Inject new amount to balance and deposit
  document.getElementById("balance-amount").innerHTML = netSum;
  document.getElementById("deposit-amount").innerHTML = netDeposit;
});

// WithDraw Functionality
var withdrawBtn = document.getElementById("w-btn");
withdrawBtn.addEventListener("click", function () {
  // Get Initial net amount
  var netAmount = parseInt(document.getElementById("balance-amount").innerHTML);
  // Get Initial withdraw amount
  var withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").innerHTML
  );
  // Catch deposit input
  var withdrawInput = parseInt(document.getElementById("withdraw-input").value);
  // Calculate Amount
  netSum = netAmount - withdrawInput;
  netWithdraw = withdrawAmount + withdrawInput;
  // Inject new amount to balance and withdraw
  document.getElementById("balance-amount").innerHTML = netSum;
  document.getElementById("withdraw-amount").innerHTML = netWithdraw;
});
