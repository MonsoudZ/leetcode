const array = [200,400,53,62,563,2,1,600]

//MAX
let max = Math.max.apply(0, array)
console.log(max)

//drawing it out

let largest = array[0];
    for (let i = 0; i < array.length; i++){
        if(largest < array[i]) {
            largest = array[i]
        }
    }

console.log(largest)


