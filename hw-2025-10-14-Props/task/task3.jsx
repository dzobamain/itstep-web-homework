// task3.jsx

import { useState, useEffect } from "react";

function Time({ format = "HH:MM:SS" }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        switch (format) {
            case "HH:MM":
                return `${hours}:${minutes}`;
            case "HH:MM:SS":
            default:
                return `${hours}:${minutes}:${seconds}`;
        }
    };

    return (
        <div className="time-card">
            <p style={{ fontSize: "2rem", margin: "1rem 0" }}>
                {formatTime(currentTime)}
            </p>
        </div>
    );
}

export default Time;
