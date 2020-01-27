function currencyConvert(){
    let amount = document.getElementById('amount').value;
    let to = document.getElementById('to').value;
    let sum;
  
    if(to == "usd"){
      sum = amount / 1.64;
      document.getElementById('result').innerHTML = amount + " BGN is " + sum.toFixed(4) + " " + to.toUpperCase();
    }
    else if(to == "eur"){
      sum = amount / 1.95;
      document.getElementById('result').innerHTML = amount + " BGN is " + sum.toFixed(4) + " " + to.toUpperCase();
    }
    else if(to == "gbp"){
      sum = amount / 2.22;
      document.getElementById('result').innerHTML = amount + " BGN is " + sum.toFixed(4) + " " + to.toUpperCase();
    }
  }
  
