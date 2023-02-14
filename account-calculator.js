function getValue(getId) {
    let deposit = document.getElementById("depositValue");
    let currentBalance = document.getElementById("currentBalance");
    let WithDraw=document.getElementById("showWidthValue");
    if (getId == 'depositInputValue') {
        let inputDepositValue = document.getElementById("depositFieldValue").value;
        let value = sum(deposit, currentBalance, inputDepositValue);
        deposit.innerText = value[0];
        currentBalance.innerText = value[1];
    }
    else if(getId=="WidthDraw"){
        let inputWidthDrawValue = document.getElementById("widthDrawFiled").value;
        let value = sum(WithDraw, currentBalance, inputWidthDrawValue,getId);
        WithDraw.innerText=value[0];
        currentBalance.innerText=value[1]

    }
}

function sum(value, currentBalance, inputValue,id) {
   let totalCurrentBalance=0;
    let getDepositValue = value.innerText;
  
    let getCurrentBalance = currentBalance.innerText;
    let tatalDeposit= parseFloat(inputValue) + parseFloat(getDepositValue);
     totalCurrentBalance =  parseFloat(inputValue) + parseFloat(getCurrentBalance);
if(id =="WidthDraw"){
     
console.log(getCurrentBalance)
    if ( parseFloat(inputValue) > getCurrentBalance || parseFloat(inputValue) <=0) {
        alert("Your Account Not Available....");
        return;  
    }
    else{
        totalCurrentBalance= getCurrentBalance-inputValue;
    } 
}
    return [tatalDeposit, totalCurrentBalance];

}

function sub(){

}

function addDeposit(setId) {
    getValue(setId)
}

function widthDraw(setWidthDrawId){
    getValue(setWidthDrawId);

}