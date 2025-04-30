import { useState, useEffect } from "react";

export function useCorrect(userText = "") {
    const [texte, setTexte] = useState(userText);
    const [corrections, setCorrections] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const correctText = async (textToCorrect = texte) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://api.languagetool.org/v2/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `text=${encodeURIComponent(textToCorrect)}&language=fr`
            });

            const data = await response.json();
            setCorrections(data.matches || []);
        } catch (err) {
            setError(err.message || "Erreur inconnue");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userText) {
            correctText(userText);
        }
    }, [userText]);

    return {
        texte,
        setTexte,
        corrections,
        loading,
        error,
        correctText,
    };
}
