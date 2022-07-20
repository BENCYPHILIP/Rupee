
function currencyFormater(num, symbol) {
    let amount = parseFloat(num);
    return symbol + amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  
//   console.log(currencyFormater(83765,'$'))

module.exports = currencyFormater;
  

