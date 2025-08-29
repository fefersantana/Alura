<?php
$holder = "Fernanda";
$currentBalance = 10000.00;

echo "\n*******************\n";
echo "Account Holder: $holder \n";
echo "Current Balance: $" .number_format($currentBalance,2) ."\n";
echo "*******************\n";

do {
    echo "\n1. Check current balance\n";
    echo "2. Withdraw money\n";
    echo "3. Deposit money\n";
    echo "4. Exit\n\n";

    $option = (float)trim(fgets(STDIN));
    $currentBalance = menu($option, $currentBalance);

} while ($option != 4);

function menu($option, $currentBalance){
    switch ($option){
        case 1:{
            echo "\n*******************\n";
            echo "Current Balance: $" .number_format($currentBalance,2) ."\n";
            echo "*******************\n";
            break;
        }
        case 2:{
            echo "\nHow much would you like to withdraw? (Type 0 to cancel)\n";
            $withdraw = (float) trim(fgets(STDIN));
            if ($withdraw > $currentBalance){
                echo "Insufficient balance.\n";
                break;
            } else if ($withdraw == 0) {
                echo "Transaction cancelled.\n";
                break;
            } else {
                $currentBalance -= $withdraw;
                echo "Withdrawal successful.\n";
            }
            break;
        }
        case 3:{
            echo "\nHow much would you like to deposit? (Type 0 to cancel)\n";
            $deposit = (float) trim(fgets(STDIN));
            if ($deposit < 0){
                echo "Please enter an amount greater than zero.\n";
                break;
            } else if ($deposit == 0){
                echo "Transaction cancelled.\n";
                break;
            } else {
                $currentBalance += $deposit;
                echo "Deposit successful.\n";
            }
            break;
        }
        case 4:    
            echo "\nExiting.\n";
            break;
        default:
            echo "\nInvalid option. Please try again.\n";
            break;
    }
    return $currentBalance;
}
