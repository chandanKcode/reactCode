import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0)
    function clickbutton() {
        let currentCount = setCount((count) => count + 1)
        console.log(currentCount)
        alert("You have clicked a button " + {currentCount})
    }

    return (<div>
        <label id='lbl1' >You pressed {count} times.</label><br></br>
        <button onClick={clickbutton}>submit</button>
        
    </div>
    )

}

export default Counter