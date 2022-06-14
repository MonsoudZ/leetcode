const array = [200,400,53,62,563,2,1,600]


let secondHighest = array[0];
for (let i = 0; i < array.length; i++){

    if(secondHighest < array[i]) {
        secondHighest = array[i]
    }
}

console.log(secondHighest)

// need to work on this^ 06/14/2022