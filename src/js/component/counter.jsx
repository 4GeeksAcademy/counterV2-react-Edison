import React, {useState,useEffect} from "react";

let SecondsCounter = () =>{
    let [currentTime, setCurrentTime] = useState (new Date())
    let [counter, setCounter] = useState (1000000);

        useEffect(()=> {
        setInterval (()=> {
        setCurrentTime (new Date());
        },1000)
        },[])

        useEffect(() => {
            setCounter(counter-1);
            if (counter === 999990) {
                alert ("Finally Counter reached 999990!")}
            },[currentTime ])

    let counterTime = counter.toString().padStart(6,0);
    return (
        <div class="general-container d-flex">
        <i class="fas fa-clock fa-4x" style={{color: "#f4f7fa", padding: 50}} />
            <div class="numbers-container">
                {counterTime.split("").map((item, index) => ( 
                    <div key={index} className="numbers"> {item} </div>))}
            </div>
        </div>
    )
}
export default SecondsCounter
