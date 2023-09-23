import React, { useEffect, useState } from 'react';
import styles from  "./CountDown.module.css";

function CountdownTimer() {
    const [timer, setTimer] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        function updateTimer(deadline) {
            const time = deadline - new Date();
            setTimer({
                days: Math.floor(time / (1000 * 60 * 60 * 24)),
                hours: Math.floor((time / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((time / 1000 / 60) % 60),
                seconds: Math.floor((time / 1000) % 60),
            });
        }

        const deadline = new Date('October 07, 2023 12:00:00');
        const timerInterval = setInterval(() => {
            updateTimer(deadline);
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, []);

  

    return (
        <div className={styles['countdown-root']}>
            <div id={styles.main}>
                <div id={styles.clock}>
                    <span  className={styles['countdown-span']}>
                        {timer.days}
                    </span> 
                    <span

                        className={styles['countdown-span']}
                    >
                        {timer.hours}
                    </span>
                    <span
                        
                        className={styles['countdown-span']}
                    >
                        {timer.minutes}
                    </span>
                    <span
                        
                        className={styles['countdown-span']}
                    >
                        {timer.seconds}
                    </span>
                </div>
                <div id={styles.display}>
                    <span>Days</span> <span>Hours</span> <span>Minutes</span>
                    <span>Seconds</span>
                </div>
            </div>
        </div>
        );
}

export default CountdownTimer;
