/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useRef, useEffect } from 'react'

const CountDown: React.FunctionComponent = () => {
  const [days, setDays] = useState('0')
  const [minutes, setMinutes] = useState('0')
  const [hours, setHours] = useState('0')
  const [seconds, setSeconds] = useState('0')

  const [deadline] = useState(new Date('July 25, 2021 21:00:00').getTime())

  const intervalRef = useRef<NodeJS.Timeout>()

  const count = () => {
    const now = new Date().getTime()

    const t = deadline - now
    const dd = Math.floor(t / (1000 * 60 * 60 * 24))
    const hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
    const ss = Math.floor((t % (1000 * 60)) / 1000)

    const days = dd < 10 ? '0' + dd : dd
    const hours = hh < 10 ? '0' + hh : hh
    const minutes = mm < 10 ? '0' + mm : mm
    const seconds = ss < 10 ? '0' + ss : ss

    setDays(`${days}`)
    setMinutes(`${minutes}`)
    setHours(`${hours}`)
    setSeconds(`${seconds}`)

    if (t < 0) {
      clearInterval(intervalRef.current!)
      setDays('0')
      setMinutes('0')
      setHours('0')
      setSeconds('0')
    }
  }

  useEffect(() => {
    intervalRef.current = setInterval(count, 1000)

    return () => clearInterval(intervalRef.current!)
  }, [])

  return (
    <div id="countdown">
      <div className="col-4">
        <div className="box">
          <p id="day">{days}</p>
          <span className="text">Days</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="hour">{hours}</p>
          <span className="text">Hours</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="minute">{minutes}</p>
          <span className="text">Minutes</span>
        </div>
      </div>
      <div className="col-4">
        <div className="box">
          <p id="second">{seconds}</p>
          <span className="text">Seconds</span>
        </div>
      </div>

      <style jsx>{`
        #countdown {
          width: 250px;
          padding: 10px;
          background-color: rgba(255, 255, 255, 0.1);
          display: inline-block;
          text-align: center;
          margin: auto;
        }
        #countdown .box {
          padding: 10px;
          border-right: solid 1px rgba(255, 255, 255, 0.2);
        }
        #countdown .col-4:last-child .box {
          border-right-color: transparent;
        }
        #countdown .box p {
          font-size: 20px;
          font-weight: bold;
          margin: 0;
        }
        #countdown .box .text {
          font-size: 12px;
          font-family: sans-serif;
        }

        @media (min-width: 768px) {
          .container {
            width: 1100px;
          }
          h1 {
            font-size: 58px;
          }
          #countdown {
            width: 350px;
            padding: 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default CountDown
