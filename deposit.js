
document.getElementById("deposit").addEventListener("click", () => {
    const depositAmount = getInputValueById("depositInput");
    const previousDepositTotal = getElementValueById("depositTotal");
    
    const newDepositTotal = depositAmount + previousDepositTotal;
    if (isNaN(newDepositTotal)) {
        alert("Please enter a valid number!");
        return;
    }
    setElementValueById("depositTotal", newDepositTotal);

    const previousBalanceTotal = getElementValueById("balance");
    const newBalanceTotal = previousBalanceTotal + depositAmount;
    setElementValueById("balance", newBalanceTotal);
})