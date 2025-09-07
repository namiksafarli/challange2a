let itemName = "USB-C Cable";        


let unitCost = Number(4);
let currentStock = Number(50);
let reorderLevel = Number(60);        
let targetStock = Number(200);        
let weeklyDemand = Number(25);        
let supplierLeadTimeWeeks = Number(3); 




let weeksOfCover =
  weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;

let stockDeficit = Math.max(0, targetStock - currentStock);

let shouldReorder =
  currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

let reorderQuantity = shouldReorder ? Math.ceil(stockDeficit) : 0;

let estimatedReorderCost = reorderQuantity * unitCost;



console.log("Item:", itemName);
console.log("Weeks of Cover:", Number.isFinite(weeksOfCover) ? weeksOfCover : "Infinity");
console.log("Reorder now?:", shouldReorder);
console.log("Recommended Reorder Quantity:", reorderQuantity); 
console.log("Estimated Reorder Cost: $", estimatedReorderCost.toFixed(2));


console.log("Estimated Cost: $" + estimatedReorderCost.toFixed(2));