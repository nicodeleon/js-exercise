const numberList = [1,2,3,4,5,9999,191];

function printPrimeAndPalindromeList (numberList) {
    var primeNumberList = [];
    var isPrime = true;
    // CHECK FOR PRIME NUMBER FIRST
    for (var index = 0; index < numberList.length; index++) {    
        for (var divisor = 2; divisor < numberList[index]; divisor++) {
            if (numberList[index]%divisor === 0) {
                isPrime = false;
                break; // BREAK OUT OF INNER LOOP
            } 
        }
        // SPECIAL CASE FOR 1
        if (numberList[index] == 1) {
            isPrime = false;
        }
        // ADD ONLY IS PRIME THEN RESET FLAG
        if (isPrime) {
            primeNumberList.push(numberList[index]);
        } else {
            isPrime = true;
        }
    }

    var primePalindromeNumberList = [];
    // CHECK FOR PRIME NUMBERS THAT ARE PALINDROME
    for (var index=0; index < primeNumberList.length; index++) {
        var currentNumber = primeNumberList[index];
        var remainder, computedValue = 0;
        var originalNumber = currentNumber;

        while (currentNumber > 0) {
            remainder = currentNumber % 10;
			currentNumber = parseInt(currentNumber/10);
			computedValue = computedValue * 10 + remainder;
        }

        // IF COMPUTED VALUE IS STILL EQUAL TO ORIGINAL NUMBER - IT IS PALINDROME
        if (computedValue == originalNumber) {
            primePalindromeNumberList.push(originalNumber);
        }
    }

    // DISPLAY OUTPUT VIA CONSOLE
    /*if (primePalindromeNumberList.length > 0) {
        console.log("Output:");
        for (var index = 0; index < primePalindromeNumberList.length; index++) {
            console.log(printPrimeAndPalindromeList[index]);
        }
    }*/

    return primePalindromeNumberList;
}

console.log(printPrimeAndPalindromeList(numberList))