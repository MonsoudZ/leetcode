const array = [200,400,53,62,563,2,1,600]

let smallest = array[0];
for (let i = 0; i < array.length; i++){
    if(smallest > array[i]) {
        smallest = array[i]
    }
}

console.log(smallest)
