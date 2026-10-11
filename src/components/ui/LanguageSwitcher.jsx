import { LANGUAGES, useLanguage } from "../../context/LanguageContext.jsx";
import { FlagCO, FlagUS, FlagBR } from "./Flags.jsx";

const FLAGS = { es: FlagCO, en: FlagUS, pt: FlagBR };

const LanguageSwitcher = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className="flex items-center gap-1 sm:gap-1.5"
    >
      {LANGUAGES.map(({ code, label }) => {
        const Flag = FLAGS[code];
        const isActive = lang === code;

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-label={label}
            aria-pressed={isActive}
            title={label}
            className={`rounded-[3px] p-1 transition ${
              isActive
                ? "ring-2 ring-racing-yellow"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <Flag className="block h-3.5 w-[21px] rounded-[2px] sm:h-4 sm:w-6" />
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
