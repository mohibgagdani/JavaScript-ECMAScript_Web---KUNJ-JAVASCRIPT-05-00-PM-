let basicSalary = 50000;
let bonus = 10000;
let deductions = 5000;

let totalSalary = basicSalary + bonus; 
let netSalary = totalSalary - deductions; 
let annualSalary = netSalary * 12;
let monthlySalary = annualSalary / 12;
let remainder = annualSalary % 12;

console.log("Basic Salary: " + basicSalary);
console.log("Bonus: " + bonus);
console.log("Deductions: " + deductions);
console.log("Total Salary (Basic + Bonus): " + totalSalary);
console.log("Net Salary (Total - Deductions): " + netSalary);
console.log("Annual Salary (Net * 12): " + annualSalary);
console.log("Monthly Salary (Annual / 12): " + monthlySalary);
console.log("Remainder when Annual Salary is divided by 12: " + remainder);
