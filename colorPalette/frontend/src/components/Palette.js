import { useState } from "react"
import { useEffect } from "react"
import styles from "../styles/palette.module.css"

export function Palette() {
    const [state, setState] = useState(false)
    const [colors, setColors] = useState({
        color1: {
            color: "red",
            locked: false
        },
        color2: {
            color: "black",
            locked: false
        },
        color3: {
            color: "grey",
            locked: false
        },
        color4: {
            color: "green",
            locked: false
        },
        color5: {
            color: "wheat",
            locked: false
        }
    })


    const handleGet = async () => {
        const res = await fetch("/color/palette", {
            method: "GET",
        })
        const json = await res.json()
        setColors(json)
    }

    const animToggle = () => {
        setState(true)
        setTimeout(() => setState(false), 700)
    }
    // window.addEventListener("animationend", console.log("TestEnd"))
    // window.addEventListener("animationstart", console.log("TestStart"))
    useEffect(() => {
        window.addEventListener('keypress', handleGet)
        window.addEventListener('keypress', animToggle)

        return () => {
            window.removeEventListener('keypress', handleGet)
            window.removeEventListener('keypress', animToggle)
        }
    }, [])


    return (
        <div className={styles.window}>
            <div id={styles.one} className={!state ? styles.strip : styles.animation1}>
                <div id={styles.top}><p>{colors.color1.color}</p><button onClick={() => setColors({ ...colors, color1: { ...colors.color1, locked: !colors.color1.locked } })}><img src={!colors.color1.locked ? "/unlocked.svg" : "/locked.svg"} /></button></div>
                <div className={styles.colored} style={{ backgroundColor: colors.color1.color }}></div>
            </div>
            <div id={styles.two} className={!state ? styles.strip : styles.animation2}>
                <div id={styles.top}><p>{colors.color2.color}</p><button onClick={() => setColors({ ...colors, color2: { ...colors.color2, locked: !colors.color2.locked } })}><img src={!colors.color2.locked ? "/unlocked.svg" : "/locked.svg"} /></button></div>
                <div className={styles.colored} style={{ backgroundColor: colors.color2.color }}></div>
            </div>
            <div id={styles.three} className={!state ? styles.strip : styles.animation3}>
                <div id={styles.top}><p>{colors.color3.color}</p><button onClick={() => setColors({ ...colors, color3: { ...colors.color3, locked: !colors.color3.locked } })}><img src={!colors.color3.locked ? "/unlocked.svg" : "/locked.svg"} /></button></div>
                <div className={styles.colored} style={{ backgroundColor: colors.color3.color }}></div>
            </div>
            <div id={styles.four} className={!state ? styles.strip : styles.animation4}>
                <div id={styles.top}><p>{colors.color4.color}</p><button onClick={() => setColors({ ...colors, color4: { ...colors.color4, locked: !colors.color4.locked } })}><img src={!colors.color4.locked ? "/unlocked.svg" : "/locked.svg"} /></button></div>
                <div className={styles.colored} style={{ backgroundColor: colors.color4.color }}></div>
            </div>
            <div id={styles.five} className={!state ? styles.strip : styles.animation5}>
                <div id={styles.top}><p>{colors.color5.color}</p><button onClick={() => setColors({ ...colors, color5: { ...colors.color5, locked: !colors.color5.locked } })}><img src={!colors.color5.locked ? "/unlocked.svg" : "/locked.svg"} /></button></div>
                <div className={styles.colored} style={{ backgroundColor: colors.color5.color }}></div>
            </div>
            {/* <div className={styles.strip}>
                <div id={styles.top}><p>{colors.color3}</p><button>Lock</button></div>
                <div id={styles.test} className={!state ? styles.colored : styles.animation3} style={{ backgroundColor: colors.color3 }}></div>
            </div> */}
            {/* <div id={styles.ten} test="oof" style={{ backgroundColor: colors.color3 }} className={!state ? styles.coloredTest : styles.animation}></div> */}


        </div>
    )
}