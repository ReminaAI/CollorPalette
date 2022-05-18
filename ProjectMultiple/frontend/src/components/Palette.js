import { useEffect, useState } from 'react';
import styles from "../styles/palette.module.css"
function Palette() {
    const [colorType, setColorType] = useState("HEX")
    const [state, setState] = useState(false)
    const [colors, setColors] = useState(new Array(5).fill({ hex: "", rgb: "", hsl: "", blocked: false }))


    const animToggle = () => {
        setState(true)
    }

    useEffect(() => {
        const handleUpdate = (ev) => {
            if (ev.key === " ") {
                fetchColors()
                animToggle()
            }
        }
        document.addEventListener("keypress", handleUpdate)

        return () => {
            document.removeEventListener("keypress", handleUpdate)
        }
    }, [colors])

    useEffect(() => {
        fetchColors()
    }, [])

    function fetchColors() {
        console.log(colors)
        fetch("/create-colors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                colors
            })
        })
            .then(res => res.json())
            .then(corpo => setColors(corpo.paleta))
    }

    function handleColorBlock(i) {
        //Inverte o estado de bloqueio da cor no indice i
        setColors((prevColors) => {
            return prevColors.map((color, idx) => idx === i ? { ...color, blocked: !color.blocked } : color)
        })
    }

    return (
        <div className={styles.window}>
            <div className={styles.menu}>
                <button onClick={() => setColorType("RGB")}>RGB</button>
                <button onClick={() => setColorType("HSL")}>HSL</button>
                <button onClick={() => setColorType("HEX")}>HEX</button>
            </div>
            <div className={styles.cartoes}>
                <div onAnimationEnd={() => setState(false)} id={styles.one}
                    className={[!state ? styles.strip : styles.animation1, styles.hover1].join(" ")}>
                    <div id={styles.top}>
                        <p>{colors[0].hex}</p>
                        <button><img src={!colors[0].blocked ? "/unlocked.svg" : "/locked.svg"} /></button>
                    </div>
                    <div onClick={() => handleColorBlock(0)} className={styles.colored} style={{ backgroundColor: colors[0].hex }}></div>
                </div>

                <div id={styles.two} className={[!state ? styles.strip : styles.animation2, styles.hover2].join(" ")}>
                    <div id={styles.top}>
                        <p>{colors[1].hex}</p>
                        <button><img src={!colors[1].blocked ? "/unlocked.svg" : "/locked.svg"} /></button>
                    </div>
                    <div onClick={() => handleColorBlock(1)} className={styles.colored} style={{ backgroundColor: colors[1].hex }}></div>
                </div>
                <div id={styles.three} className={[!state ? styles.strip : styles.animation3, styles.hover3].join(" ")}>
                    <div id={styles.top}>
                        <p>{colors[2].hex}</p>
                        <button><img src={!colors[2].blocked ? "/unlocked.svg" : "/locked.svg"} /></button>
                    </div>
                    <div onClick={() => handleColorBlock(2)} className={styles.colored} style={{ backgroundColor: colors[2].hex }}></div>
                </div>
                <div id={styles.four} className={[!state ? styles.strip : styles.animation4, styles.hover4].join(" ")}>
                    <div id={styles.top}>
                        <p>{colors[3].hex}</p>
                        <button><img src={!colors[3].blocked ? "/unlocked.svg" : "/locked.svg"} /></button>
                    </div>
                    <div onClick={() => handleColorBlock(3)} className={styles.colored} style={{ backgroundColor: colors[3].hex }}></div>
                </div>
                <div id={styles.five} className={[!state ? styles.strip : styles.animation5, styles.hover5].join(" ")}>
                    <div id={styles.top}>
                        <p>{colors[4].hex}</p>
                        <button><img src={!colors[4].blocked ? "/unlocked.svg" : "/locked.svg"} /></button>
                    </div>
                    <div onClick={() => handleColorBlock(4)} className={styles.colored} style={{ backgroundColor: colors[4].hex }}></div>
                </div>
            </div>
        </div>
    );
}

export default Palette;