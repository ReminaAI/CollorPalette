import { useState } from "react"
import { useEffect } from "react"
import styles from "../styles/palette.module.css"

export function Palette() {
    const [state, setState] = useState(false)
    const [colors, setColors] = useState({
        color1: {
            color: "#2A5E7A",
            locked: false
        },
        color2: {
            color: "#5183CC",
            locked: false
        },
        color3: {
            color: "#4978E1",
            locked: false
        },
        color4: {
            color: "#58CFF3",
            locked: false
        },
        color5: {
            color: "#91F0F3",
            locked: false
        }
    })


    const handleGet = async () => {
        console.log(JSON.stringify({
            colors: colors
        }))
        const res = await fetch("/color/palette", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                colors
            })
        })
        const json = await res.json()
        setColors(json)
    }

    const animToggle = () => {
        setState(true)
    }

    useEffect(() => {
        window.addEventListener('keypress', (ev) => {
            if (ev.key === " ") {
                handleGet()
                animToggle()
            }
        })

        return () => {
            window.removeEventListener('keypress', () => {
                handleGet()
                animToggle()
            })
        }
    }, [])
    function blockColor(i) {
        let bool = false
    }

    return (
        <div className={styles.window}>
            <div className={styles.cartoes}>
                <div
                    onAnimationEnd={() => setState(false)}
                    id={styles.one} className={[!state ? styles.strip : styles.animation1, styles.hover1].join(" ")}>
                    <div id={styles.top}>
                        <p>{colors.color1.color}</p>
                        <button onClick={() => setColors({ ...colors, color1: { ...colors.color1, locked: !colors.color1.locked } })}><img src={!colors.color1.locked ? "/unlocked.svg" : "/locked.svg"} /></button>
                    </div>
                    <div className={styles.colored} style={{ backgroundColor: colors.color1.color }}></div>
                </div>
                <div id={styles.two} className={[!state ? styles.strip : styles.animation2, styles.hover2].join(" ")}>
                    <div id={styles.top}>
                        <p>{colors.color2.color}</p>
                        <button onClick={() => setColors({ ...colors, color2: { ...colors.color2, locked: !colors.color2.locked } })}><img src={!colors.color2.locked ? "/unlocked.svg" : "/locked.svg"} /></button>
                    </div>
                    <div className={styles.colored} style={{ backgroundColor: colors.color2.color }}></div>
                </div>
                <div id={styles.three} className={[!state ? styles.strip : styles.animation3, styles.hover3].join(" ")}>
                    <div id={styles.top}>
                        <p>{colors.color3.color}</p>
                        <button onClick={() => setColors({ ...colors, color3: { ...colors.color3, locked: !colors.color3.locked } })}><img src={!colors.color3.locked ? "/unlocked.svg" : "/locked.svg"} /></button>
                    </div>
                    <div className={styles.colored} style={{ backgroundColor: colors.color3.color }}></div>
                </div>
                <div id={styles.four} className={[!state ? styles.strip : styles.animation4, styles.hover4].join(" ")}>
                    <div id={styles.top}>
                        <p>{colors.color4.color}</p>
                        <button onClick={() => setColors({ ...colors, color4: { ...colors.color4, locked: !colors.color4.locked } })}><img src={!colors.color4.locked ? "/unlocked.svg" : "/locked.svg"} /></button>
                    </div>
                    <div className={styles.colored} style={{ backgroundColor: colors.color4.color }}></div>
                </div>
                <div id={styles.five} className={[!state ? styles.strip : styles.animation5, styles.hover5].join(" ")}>
                    <div id={styles.top}>
                        <p>{colors.color5.color}</p>
                        <button onClick={() => setColors({ ...colors, color5: { ...colors.color5, locked: !colors.color5.locked } })}><img src={!colors.color5.locked ? "/unlocked.svg" : "/locked.svg"} /></button>
                    </div>
                    <div className={styles.colored} style={{ backgroundColor: colors.color5.color }}></div>
                </div>
            </div>
        </div>
    )
}