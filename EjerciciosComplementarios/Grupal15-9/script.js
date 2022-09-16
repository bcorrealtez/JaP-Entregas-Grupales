let array = [100, 213, 2, 45, 34, 1, 7, 66, 13, 99999999999999999999971];

function esPrimo(num) {
    if (num==2 || num==3){return true}
    if (num<2 || num%2==0){return false}
    for (let index = 3; index < num/2; index+=2){
        if (num%index==0) {
            return false;
        }
    }
    return true;
}

let primos = array.filter(num => esPrimo(num))

console.log(primos)