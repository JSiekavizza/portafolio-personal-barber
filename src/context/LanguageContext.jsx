import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import es from "../i18n/es.js";
import en from "../i18n/en.js";
import pt from "../i18n/pt.js";

// Idiomas disponibles. `htmlLang` es el valor que se escribe en <html lang="...">
export const LANGUAGES = [
  { code: "es", label: "Español", htmlLang: "es" },
  { code: "en", label: "English", htmlLang: "en" },
  { code: "pt", label: "Português (Brasil)", htmlLang: "pt-BR" },
];

const dictionaries = { es, en, pt };
const STORAGE_KEY = "lang";
const DEFAULT_LANG = "en";

// 1) idioma guardado  2) idioma del navegador  3) español
const getInitialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && dictionaries[saved]) return saved;
  } catch {
    // localStorage no disponible (modo privado, etc.): seguimos sin guardar
  }
  const browser = (navigator.language || "").slice(0, 2).toLowerCase();
  return dictionaries[browser] ? browser : DEFAULT_LANG;
};

// Convierte "hero.titleLine1" en dictionary.hero.titleLine1
const resolve = (dictionary, path) =>
  path.split(".").reduce((node, key) => node?.[key], dictionary);

const LanguageContext = createContext(null);

// Nota: este archivo exporta componente + hook; Vite solo avisa (no falla)
// y el cambio de este archivo recarga la página completa en desarrollo.
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    const current = LANGUAGES.find((l) => l.code === lang);
    document.documentElement.lang = current.htmlLang;
    document.title = dictionaries[lang].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // sin persistencia, no pasa nada
    }
  }, [lang]);

  // t("hero.titleLine1") -> texto en el idioma activo.
  // Si falta la clave en ese idioma, cae a español; si tampoco existe, devuelve la clave.
  const t = useCallback(
    (path) => {
      const value = resolve(dictionaries[lang], path);
      if (value !== undefined) return value;
      const fallback = resolve(dictionaries[DEFAULT_LANG], path);
      return fallback !== undefined ? fallback : path;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return context;
};
