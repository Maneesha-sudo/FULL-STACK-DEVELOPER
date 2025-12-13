import { useState, useEffect } from "react"
function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count!==0 && count % 3 === 0) {
            alert(`The current number ${count} is divisible by 3`)
        }
    }, [count])

    function PerformAction() {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>This is mini counter app</h2>
            <h2>count: {count}</h2>
            <button onClick={PerformAction}>Increase</button>

        </div>
    )
}
export default Counter;