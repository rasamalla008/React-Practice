// functoin which takes a function in as parameter and return us a function also
function x(){
    // console.log(1+1);
}

function y(x){
    return x()
}
y(x)

const a =[1,2,3,4];
function area(r){
    return 3.14*r*r;
}
// for(let i=0;i<a.length;i++){
//     console.log(area(a[i]))
// }

function calculateArea(areaFunction, ...value){
    return areaFunction(...value)
}

console.log(calculateArea(areaCircle, 5));
console.log(calculateArea(rectangle, 10,4))
console.log(triangle(triangle, 6,3 ))

function areaCircle(r){
    return Math.PI * r *r
}

function rectangle(length, width){
    return length * width
}

function triangle(base, height){
    return base * height
}

const arr = [1,2,3,4,5,6,7];

const result = arr.map((arrItem)=> arrItem*2); // it create new array original one will not be modified
console.log(result)
console.log(arr)

const result1 = arr.filter((item)=>item%2);
console.log(result1)
console.log(arr)

const forEachResult = arr.forEach((item)=> item*2);
console.log(forEachResult)
arr.reduce((acc, initial)=>{})

