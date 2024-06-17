import React, { useState, createContext, useContext } from "react";
import {Nederland, English, French, Spanish, Germeny } from "../utils/languages";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(Nederland);

    const setLanguage = (lan) => {
        if (lan === "nl_NL") setLang(Nederland);
        else if (lan === "en_EN") setLang(English);
        else if (lan === "es_ES") setLang(Spanish);
        else if (lan === "fr_FR") setLang(French);
        else if (lan === "de_DE") setLang(Germeny);
    }

    return (
        <LanguageContext.Provider value={{ setLanguage, lang }}>
            {children}
        </LanguageContext.Provider>
    )
};

export const useLanguage = () => useContext(LanguageContext);