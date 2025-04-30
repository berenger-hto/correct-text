import "../css/correct.css";
import {useEffect, useRef, useState} from "react";
import {Alert} from "./Alert.jsx";
import {useCorrect} from "../hooks/useCorrect.jsx";

export function Correct() {
    const textareaRef = useRef(null)
    const [text, setText] = useState("")
    const textLength = text.length
    useEffect(() => {
        console.log(text, textLength)
    }, [text, textLength])

    const handleClear = () => {
        if (!textareaRef.current) return
        textareaRef.current.value = ""
    }

    const {corrections, loading, error, correctText} = useCorrect()
    useEffect(() => {
        console.log(corrections, loading, error)
    }, [corrections, loading, error])

    return (
        <div className="correct">
            {error && <Alert message="Une erreur s'est produite lors de la correction" /> }
            <div className="form">
                <p>Quel texte voulez-vous qu'on corrige ?</p>
                <div className="box">
                    <textarea
                        ref={textareaRef}
                        placeholder="Coller ici votre texte"
                        value={text}
                        onChange={(e) => setText(e.currentTarget.value)}
                    >
                    </textarea>
                </div>
                <div className="control">
                    <div onClick={handleClear} className="add_element">
                        <i className='bx bx-x'></i>
                        <span>Vider le champ</span>
                    </div>
                    <button className="submit" onClick={() => correctText(text)}>{loading ? "En cours" : "Corriger le texte"}</button>
                </div>
                {textLength >= 20000 &&
                    <Alert message="Texte trop long" />
                }
            </div>
            {
                corrections &&
                <div className="suggested">
                        {
                            corrections.map(correct => (
                                <div className="suggest">
                                    <p className="error_text">{correct?.message ?? correct?.rule.description}</p>
                                    <div className="choice">
                                        {
                                            correct.replacements.map(c => (
                                                <button>{c.value}</button>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                </div>
            }
        </div>
    );
}
