import { useTranslation } from "react-i18next";

export const Header = () => {

    const { i18n } = useTranslation("global");

    const cambiarIdioma = (estado: boolean) => {

        if (estado === true) {

            i18n.changeLanguage("es");
            localStorage.setItem("idioma", "es");

        } else {

            i18n.changeLanguage("en");
            localStorage.setItem("idioma", "en");

        }
    };

    return (
        <div className="absolute right-10 top-3 flex w-20 md:w-24 gap-4">

            <button className="hover:animate-bounce" onClick={() => cambiarIdioma(true)}>

                <img src="es.png" alt="Es" />

            </button>

            <button className="hover:animate-bounce" onClick={() => cambiarIdioma(false)}>

                <img src="en.png" alt="En" />

            </button>
        </div>
    );
};
