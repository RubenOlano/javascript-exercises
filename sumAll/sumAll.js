const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    let startNumber = 0;
    let endNumber = 0;

    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)){
        return 'ERROR';
    }

    if (firstNumber < secondNumber){
        startNumber = firstNumber;
        endNumber = secondNumber;
    }
    else{
        startNumber = secondNumber;
        endNumber = firstNumber;
    }
    if (startNumber < 0){
        return 'ERROR';
    }
    else{
        for (startNumber; startNumber <= endNumber; startNumber++){
            sum += startNumber;
        }
        return sum;
        }       
}

module.exports = sumAll
