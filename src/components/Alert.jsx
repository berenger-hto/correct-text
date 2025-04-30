import {styles} from "../css/styles.js";
import {useEffect, useRef, useState} from "react";

export function Alert({message}) {
    const ref = useRef(null)
    const [active, setActive] = useState(true)
    useEffect(() => {
        if (!ref.current) return
        const timer = setTimeout(() => {
            console.log("close")
            setActive(false)
        }, 10000)
        return () => clearInterval(timer)
    }, [active])
    return <>
        {active && <div className="alert" style={{...styles.alertComponent}} ref={ref}>
            {message}
        </div>}
    </>
}