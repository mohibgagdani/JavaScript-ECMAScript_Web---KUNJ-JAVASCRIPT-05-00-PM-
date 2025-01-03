function expenseBalancer(income, food, transport, gadgets) {
    let totalExpenses = food + transport + gadgets;

    if (totalExpenses > income) {
        return "System Warning: Bankrupt in Future!";
    } else if (totalExpenses < income) {
        return "Future Secure!";
    } else {
        return "Zero Savings: Future Risky!";
    }
}

let income = parseInt(prompt("Enter your monthly income: "));
let food = parseInt(prompt("Enter your monthly food expenses: "));
let transport = parseInt(prompt("Enter your monthly transport expenses: "));
let gadgets = parseInt(prompt("Enter your monthly gadgets expenses: "));

let result = expenseBalancer(income, food, transport, gadgets);
console.log(result);
