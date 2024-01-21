document.getElementById("withdraw").addEventListener("click", () => {
    const withdrawAmount = getInputValueById("withdrawInput");
    const previousWithdrawTotal = getElementValueById("withdrawTotal");

    const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
    if (isNaN(newWithdrawTotal)) {
        alert("Please enter a valid number!");
        return;
    }
    const previousBalanceTotal = getElementValueById("balance");
    if (withdrawAmount > previousBalanceTotal) {
        alert('Tomer Baper ato taka nai go!');
        return;
    }
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;

    setElementValueById("withdrawTotal", newWithdrawTotal);
    setElementValueById("balance", newBalanceTotal);
})