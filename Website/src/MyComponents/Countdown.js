import { useEffect, useRef , useState } from 'react'

export default function Countdown({seconds}){
    const [countdown, setCountdown ] = useState (seconds)
    const timerId = useRef()

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountdown(prev => prev-1)
        },1000)
        return () => clearInterval(timerId.current)
    },[])
     
    useEffect(() => {
        if(countdown <= 0){
            clearInterval(timerId.current)
            alert('End')
        }
    },[countdown])
    return(
        <h2>Count Down :{countdown} </h2>
    )

}