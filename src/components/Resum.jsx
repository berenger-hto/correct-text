import "../css/correct.css";
import {useRef, useState} from "react";
import {Alert} from "./Alert.jsx";

export function Resum() {
    const textareaRef = useRef(null)
    const [text, setText] = useState("")
    const textLength = text.length

    const handleClear = () => {
        if (!textareaRef.current) return
        textareaRef.current.value = ""
    }

    return (
        <div className="correct">
            <div className="form">
                <p>Quel texte voulez-vous qu'on résume ?</p>
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
                    <button className="submit">Résumer le texte</button>
                </div>
                {textLength >= 20000 &&
                    <Alert message="Texte trop long" />
                }
            </div>
        </div>
    );
}
