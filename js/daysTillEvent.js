// Function
// EWU Graudation Date
const gradDay = "2025-06-23";
const daysUntilGrad = getDaysUntilEvent(gradDay);
console.log( daysUntilGrad );

// Get HTML element
const elemDaysUntilGrad = document.querySelector('.daysUntilGraduation');
// Set to HTML
elemDaysUntilGrad.textContent = daysUntilGrad;
elemDaysUntilGrad.setAttribute("datetime", daysUntilGrad );