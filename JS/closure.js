function x(){ // outer
    var a = 10;
    function y(){ //inner
        console.log(a)
        a = 14
        console.log(a)
    }
    a = 11;
    a = 12;

    return y()
 }
x()
// console.log(a)
// when outer function finishes the execution after that also y(inner function) can access the variables of outer function

//var - var can be reassigned and that's why value i will be updated to 5;

var  m = 10;
var m = 11;
console.log(m)
function a(){
    for(var i=0;i<5;i++){
        function x(i){
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }
    x(i)
    }
}

a()

// let it cant be reassigned so it create a new reference in the memory

function leet(){

    for(let i=0;i<5;i++){ // new variable will be created every time for this every loop
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    }
}

leet()