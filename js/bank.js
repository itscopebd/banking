

document.getElementById("depositInputValue").addEventListener("click", function () {
    // get deposit input value 
    let newDeposit = document.getElementById("depositFieldValue").value;
    let showDepositValue = document.getElementById("depositValue");
    if (depositInputValue == "") {
        alert("Please Enter Your Deposit Value....");
    } else {
        let previousDeposit = showDepositValue.innerText;
        // set deposit value 
        let totalDeposit = parseFloat(newDeposit) + parseFloat(previousDeposit);
        showDepositValue.innerText = totalDeposit;

        // get courrent Balance 
        let currentBalance = document.getElementById("currentBalance");

        let currentBalanceValue = currentBalance.innerText;
        // set total Balance 
        let totalBalance = parseFloat(currentBalanceValue) + totalDeposit;
        currentBalance.innerText = totalBalance;

    }
})




// money width Draw function 


function widthDraw(){
  let widthDraw= document.getElementById("widthDrawFiled");
  let widthDrawValue= widthDraw.value;
  let showWidthValue = document.getElementById("showWidthValue");
  if(widthDrawValue==""){
    alert("Please Input Your Width Draw Value.........");
  }
  else{
let currentValue= document.getElementById("currentBalance");
//  set widthdraw show value 

showWidthValue.innerText= widthDrawValue;

let getCurrentValue= currentValue.innerText;
let calculateValue= parseFloat(getCurrentValue) - widthDrawValue;
// set balance 

if (getCurrentValue < widthDrawValue || widthDrawValue <= 0) {
    alert("Your Balance Not Available..")
    
}else{
    currentValue.innerText=calculateValue;
}
 
  }
}


