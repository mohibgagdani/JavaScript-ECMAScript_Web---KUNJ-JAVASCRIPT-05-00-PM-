function calculateEMI(loanAmount, interestRate, tenure) {
    let monthlyInterestRate = interestRate / 12 / 100;
    let numberOfMonths = tenure * 12;
    let emi = loanAmount * monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, numberOfMonths) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1));
    return Math.round(emi);
}

function updateEMI() {
    let loanAmount = document.getElementById('loanAmount').value;
    let interestRate = document.getElementById('interestRate').value;
    let tenure = document.getElementById('tenure').value;
    let emi = calculateEMI(loanAmount, interestRate, tenure);
    document.getElementById('emiAmount').innerText = `₹${emi.toLocaleString()}`;
}

document.getElementById('loanAmount').addEventListener('input', function() {
    document.getElementById('loanAmountRange').value = this.value;
    updateEMI();
});

document.getElementById('loanAmountRange').addEventListener('input', function() {
    document.getElementById('loanAmount').value = this.value;
    updateEMI();
});

document.getElementById('interestRate').addEventListener('input', function() {
    document.getElementById('interestRateRange').value = this.value;
    updateEMI();
});

document.getElementById('interestRateRange').addEventListener('input', function() {
    document.getElementById('interestRate').value = this.value;
    updateEMI();
});

document.getElementById('tenure').addEventListener('input', function() {
    document.getElementById('tenureRange').value = this.value;
    updateEMI();
});

document.getElementById('tenureRange').addEventListener('input', function() {
    document.getElementById('tenure').value = this.value;
    updateEMI();
});

updateEMI();