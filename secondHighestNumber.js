const array = [200,400,53,62,563,2,1,600]

let highest = array[0];
let secondHighest = array[0];
for(let i = 0; i < array.length; i++){
    if(array[i] > highest){
        secondHighest = highest;
        highest = array[i];
    }
    else if(array[i] > secondHighest && array[i] != highest)
        secondHighest = array[i];
}

console.log(secondHighest);
