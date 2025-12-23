//Use reduce to find the maximum number in [5,3,9,1].

const numbers=[1,2,3,4]
const sum=numbers.reduce((acc,current) => acc+current, 0);
console.log(sum);

const square=numbers.reduce((acc,curr)=> acc*curr, 1);
console.log(square)

const mul= numbers.filter(num=> num%2===0)
console.log(mul)