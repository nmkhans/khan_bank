// Deposit Variables
let depositBtn = document.getElementById('depositBtn');
let depositInput = document.getElementById('deposit');
let depositDisplay = document.getElementById('depositDisplay');
depositBtn.addEventListener('click', depositStatement);

// Banalce Variables
let balanceDisplay = document.getElementById('balanceDisplay');

// Withdraw Variables
let withdrawBtn = document.getElementById('withdrawBtn');
let withdrawInput = document.getElementById('withdraw');
let withdrawDisplay = document.getElementById('withdrawDisplay');
withdrawBtn.addEventListener('click', withdrawStatement);


/* Display Deposit and Balance Amount */

function depositStatement() {

     // Deposit Amount
    let depositPrevValue = parseFloat(depositDisplay.innerText);
    let depositCurrentValue = parseFloat(depositInput.value);
    let depositUpdateValue = depositPrevValue + depositCurrentValue;
    let displayDepositValue = depositDisplay.innerText = depositUpdateValue;

    // Blance Amount
    let displayBalanceAmount = parseFloat(balanceDisplay.innerText);
    let updateBalance = displayBalanceAmount + depositCurrentValue;
    let updateBalanceDisplay = balanceDisplay.innerText = updateBalance;
    // Empty Amount
    depositInput.value = '';
}

/* Display Witdraw Amount */

function withdrawStatement() {

    // Display Withdraw Amount
    let withdrawPrevValue = parseFloat(withdrawDisplay.innerText);
    let withdrawCurrentValue = parseFloat(withdrawInput.value);

    let witdrawNewValue = withdrawPrevValue + withdrawCurrentValue;
    let withDrawUpdate = withdrawDisplay.innerText = witdrawNewValue;

    // Reduce Balance Amount
    let balanceAmount = parseFloat(balanceDisplay.innerText);
    let reducedBalance = balanceAmount - withdrawCurrentValue;
    let displayRedicedBalance = balanceDisplay.innerText = reducedBalance;

    // Empty Field
    withdrawInput.value = '';
}