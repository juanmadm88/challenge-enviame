
const MAX_DIVISORS = 1000;

let calculateDivisorsQuantity = (aNumber) =>{
    let divisorsQuantity = 0;
    for (let i=1; i<=Math.sqrt(aNumber); i++)
    {
        if (aNumber%i == 0)
        {
            if (aNumber/i == i){
                divisorsQuantity ++;
            }else{
                divisorsQuantity +=2;
            }
        }
    }
    return divisorsQuantity;
}
let calculateFibonacci = (aNumber,aCache) =>{
    if (aCache[aNumber]) return aCache[aNumber];
    if (aNumber < 2) return aNumber;
    return aCache[aNumber] = calculateFibonacci(aNumber - 1, aCache) + calculateFibonacci(aNumber - 2, aCache);
}

let wasFound = false;
let number = 0;
let cache = {};
let index = 0;

while(!wasFound){
    let fibonacciNumber = calculateFibonacci(number,cache);
    let divisorQuantity = calculateDivisorsQuantity(fibonacciNumber);
    if(divisorQuantity > MAX_DIVISORS) {
        wasFound = true;
    }else{
        number++;
    }
}

console.log(`primer numero de fibonacci con mas de ${MAX_DIVISORS} divisores: ${number}`)


