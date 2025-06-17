import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function PageNotFound() {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (countdown === 0) {
            navigate("/");
            return;
        }
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
    }, [countdown, navigate]);

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div
                        style={{
                            fontSize: "6rem",
                            fontWeight: "bold",
                            color: "#ff4d4f",
                            animation: "bounce 1s infinite"
                        }}
                    >
                        4😩4
                    </div>
                    <style>
                        {`
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                    }
                    `}
                    </style>
                    <p className="read-the-docs">
                        Page Not Found
                    </p>
                    <p>Redirecting to Home Page in <span style={{ fontWeight: "bold", color: "#ff4d4f" }}>{countdown}</span> seconds...</p>
                </div>
            </div>
        </>
    )
}