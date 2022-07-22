
function currencyFormater(num) {
    let amount = parseFloat(num);
    return '₹ ' + amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  
// console.log(currencyFormater(83765))

module.exports = currencyFormater;
  

