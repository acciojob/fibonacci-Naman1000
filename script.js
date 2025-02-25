function fibonacci(num) {
// your code here\
	if (num === 0) return 0;
    if (num === 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);

	
	   let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

module.exports = fibonacci;
