function calculateMortgage() {
  // Reset errors
  document.getElementById('error').innerHTML = '';

  // Get input values
  var principal = parseFloat(document.getElementById('principal').value);
  var interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Monthly interest rate
  var loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12; // Total number of payments

  // Check for valid input
  if (isNaN(principal) || isNaN(interestRate) || isNaN(loanTerm) || principal <= 0 || interestRate <= 0 || loanTerm <= 0) {
    document.getElementById('error').innerHTML = 'Please enter valid positive numbers for all fields.';
    return;
  }

  // Calculate monthly mortgage payment
  var monthlyPayment = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

  // Display the result
  document.getElementById('result').innerHTML = 'Monthly Payment: $' + monthlyPayment.toFixed(2);
}
