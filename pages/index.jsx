import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

const LAUNCH_DATE = new Date("2026-03-01T00:00:00Z");

export default function MegaBuyGlobal() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Head>
                <title>MegaBuyGlobal — Coming Soon</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <main style={styles.container}>
                <Image
                    src="/logo-no-background.jpeg"
                    alt="MegaBuy Global Logo"
                    width={280}
                    height={160}
                    priority
                />

                <h1 style={styles.title}>We’re launching soon 🚀</h1>
                <p style={styles.subtitle}>
                    Launching March 1, 2026
                </p>

                <div style={styles.countdown}>
                    {Object.entries(timeLeft).map(([label, value]) => (
                        <div key={label} style={styles.box}>
                            <span style={styles.time}>{value}</span>
                            <span style={styles.label}>{label}</span>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

function getTimeLeft() {
    const diff = LAUNCH_DATE - new Date();
    if (diff <= 0) return { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };

    return {
        Days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((diff / (1000 * 60)) % 60),
        Seconds: Math.floor((diff / 1000) % 60),
    };
}

const styles = {
    container: {
        minHeight: "100vh",
        background: "#020617",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1.5rem",
    },
    title: { fontSize: "2.5rem" },
    subtitle: { opacity: 0.8 },
    countdown: { display: "flex", gap: "1rem" },
    box: {
        background: "#020617",
        border: "1px solid #1e293b",
        padding: "1rem",
        borderRadius: "10px",
        minWidth: "80px",
    },
    time: { fontSize: "1.8rem", fontWeight: "bold" },
    label: { fontSize: "0.7rem", opacity: 0.6 },
};
