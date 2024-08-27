import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./public/locales/uz/translation.json";
import ru from "./public/locales/ru/translation.json";
import en from "./public/locales/en/translation.json";

const resources = {
    uz: {
        translation: uz
    },
    ru: {
        translation: ru
    },
    en: {
        translation: en
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "uz",
    fallbackLng: ["en", "ru"], // fallbackLng may now include an array
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
