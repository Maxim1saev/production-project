import { useState } from "react"
import classes from './styles.module.scss'

export const Counter = ()=>{
const [counter, setCounter] = useState(0)

    return (
        <>
<h2>{counter}</h2>

        <button className={classes.btn} onClick={()=>setCounter(counter+1)}>Incre</button>
        </>
    )
}