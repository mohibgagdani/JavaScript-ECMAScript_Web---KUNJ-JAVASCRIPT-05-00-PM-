const principalAmount = 100000;
const rateOfInterest = 7;
const timePeriod = Math.floor(Math.random() * 5) + 1;

const interest = (principalAmount * rateOfInterest * timePeriod) / 100;
const totalPayableAmount = principalAmount + interest;

console.log("Principal Amount:  " +principalAmount);
console.log("Rate of Interest: " +rateOfInterest);
console.log("Time Period: " +timePeriod);
console.log("Interest: " +interest);
console.log("Total Payable Amount: " +totalPayableAmount);
