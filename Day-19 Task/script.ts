// Chunk
let chunk=(arr,n)=>{
    let chArr=[];
    let spArr=[...arr];         // Array Destructor
    let size=Math.ceil((spArr.length)/n);
    for(let i=0;i<size;i++){
        chArr.push(spArr.splice(0,n));
    }
    return chArr;
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));

// Sum
let sum =(...args)=>{

    let s=0;
    for(let i of args){
        s += i;
    }
    return s;
}
console.log(sum(1,2,3,4,5));
