function calculateRepayment() {
  principal = document.getElementById("loan-amount").value;
  interestRate = document.getElementById("interest-rate").value;
  monthsRemaining = document.getElementById("months-remaining").value;
  
  //First, multiply interest rate by 0.01 to convert to decimal/percentage, then divide by the months remaining and multiply by loan amount to amortize it.
  interest = principal * ((interestRate*0.01) / monthsRemaining);
  
  //Monthly Payment = Loan Amount / Months Remaining + Interest, to 2 decimal places. (***redundant?) 
  monthlyPayment = (principal / monthsRemaining + interest).toFixed(2);

  document.getElementById(
    "payment"
  ).innerHTML = `Monthly Payment: $${monthlyPayment}`;
}
