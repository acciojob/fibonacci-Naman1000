function fibonacci(num) {
// your code here\
	if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1, temp;
  
  for (let i = 3; i <= num; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
	
}

module.exports = fibonacci;
