import { useEffect, useRef, useState } from "react"

export default function Useref(){
const [count, setCount] = useState(0); 

//re-rendering happens only when a state variable change
// when we change any state variable the re-rendering happens for every code written inside the code of a component
// we have useRef hook which help in persisting the value of a local variable to persist during the re-rendering
let a = useRef(0);
const btnRef = useRef()

useEffect(()=>{
    a.current= a.current+1
    console.log(a.current);
    btnRef.current.style.color="red"
},[]);

return(
    <>
     <button ref={btnRef} onClick={()=>setCount((count)=>count+1)}> Click me</button>
     <br />
     {count}
    </>
)

}