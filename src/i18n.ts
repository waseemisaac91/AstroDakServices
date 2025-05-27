import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "./translations/en";
import nlTranslations from "./translations/nl";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "nl",
    resources: {
      en: {
        translation: enTranslations,
      },
      nl: {
        translation: nlTranslations,
      },
    },
    fallbackLng: "nl",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
