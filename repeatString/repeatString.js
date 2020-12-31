const repeatString = function(string, repetitions) {
    let newString = '';
    
    if (repetitions >= 0){
        for (let i = 0; i < repetitions; i++){
            newString += string;
        }
    }
    else{
        return 'ERROR';
    }

    return newString;
}

module.exports = repeatString
