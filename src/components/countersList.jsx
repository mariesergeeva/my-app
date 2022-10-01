import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id:0, value:0, name: 'Ненужная вещь' }, 
        { id:1, value:4, name: 'Ложка' }, 
        { id:2, value:0, name: 'Вилка' }, 
        { id:3, value:4, name: 'Тарелка' }, 
        { id:4, value:0, name: 'Набор минималиста' }
    ]

    const [counters, setCounters] = useState(initialState)

const handleDelete = (id) => {
    const newCounter = counters.filter(c => c.id !== id)
    setCounters(newCounter)
}

const handleReset = () => {
    setCounters(initialState)
}

const handleIncrement = (id) => {
    const incCounterValue = counters.map(c => {
        if (c.id === id) {
            c.value += 1
        }
        return c
    })
    setCounters(incCounterValue)
}

const handleDecrement = (id) => {
    const incCounterValue = counters.map(c => {
        if (c.id === id) {
            c.value -= 1
        }
        return c
    })
    setCounters(incCounterValue)
}

    return (
        <>
            {counters.map((count) => (
                <Counter 
                    key={count.id} 
                    onDelete={handleDelete} 
                    onIncrement={handleIncrement} 
                    onDecrement={handleDecrement}
                    {...count}/> 
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>reset</button>
        </>
    )
}

export default CountersList