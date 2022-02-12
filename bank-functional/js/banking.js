document.getElementById('deposit-button').addEventListener('click', function(){
  // deposit input
//   const depositAmount = document.getElementById('deposit-input');
//   const depositAmountValue = parseFloat(depositAmount.value) ;
    const depositAmountValue =  getInputValue ()
 // deposit money
     const depositBalance = document.getElementById('deposit-money');
     const depositCurrency = parseFloat (depositBalance.innerText) ;
 // total deposit money 
      const totalDepositBalance = depositCurrency + depositAmountValue
      depositBalance.innerText= totalDepositBalance

    // balance total 
    const balanceTotal = document.getElementById('balance-total');
    const balance = parseFloat(balanceTotal.innerText);
    
    const totalBalance = balance + totalDepositBalance ;
     balanceTotal.innerText = totalBalance ;
   
})

// any button call this function
function getInputValue (){
    const depositAmount = document.getElementById('deposit-input'); 
    const depositAmountValue = parseFloat(depositAmount.value)
    depositAmount.value = '';
       return depositAmountValue ;
   }


   // withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
    // input withdraw
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmount = parseFloat(withdrawInput.value);
    const withdrawAmount = getInputValue('withdraw-input')


    // withdraw  balance
    const totalWithdraw  = document.getElementById('withdraw-balance');
     const total =  parseFloat( totalWithdraw.innerText)
     // total withdraw balance
    const totalWithdrawBalance = total + withdrawAmount ;
    totalWithdraw.innerText = totalWithdrawBalance ;
   
    // new total balance
    const balanceTotal = document.getElementById('balance-total');
    const balance = parseFloat(balanceTotal.innerText);
    
    const totalBalance = balance -  totalWithdrawBalance
    
    ;
     balanceTotal.innerText = totalBalance ;
    // clean 
     withdrawInput.value = '';
})