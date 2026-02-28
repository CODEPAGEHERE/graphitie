// Code deciding and influencing the current date of the footer. //
// COMMENT EN HD /
// 28/02/'26 //

 document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
});
