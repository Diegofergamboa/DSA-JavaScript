var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } 
        
        digits[i] = 0;
    }

    return [1, ...digits];
};

plusOne([9,2,3,4])
//Input: digits = [9]
//Output: [1,0]