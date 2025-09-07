let ProductName = "Nichirin Keychain"

let costPerUnit = 7;
let basePrice = 18;
let discountRate = 0.10;
let salesTaxRate = 0.03;
let fixedMonthlyCosts = 1000;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("Product:", ProductName)
console.log("Discounted price (before tax):", discountedPrice)
console.log("Final price with tax:", finalPriceWithTax)
console.log("Profit per unit:", profitPerUnit)
console.log("Break-even units:", breakEvenUnits)
console.log("Per-unit profitability:", isProfitablePerUnit)