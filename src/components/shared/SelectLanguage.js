import * as React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import AppContext from '../../contexts/AppContext';

const options = [
    { value: 'es', label: 'Español' },
    { value: 'en', label: 'English' }
];

const SelectLanguage = () => {

    const {lang, setLang} = React.useContext(AppContext);
    const { changeLanguage } = useI18next();
    
    React.useEffect(() => {
        changeLanguage( localStorage.getItem('lang') || 'es' );
        setLang(localStorage.getItem('lang') || 'es');
    }, [lang]);

    const setLanguage = (e) => {

        console.log("Se ha seleccionado el idioma: ", e);
        localStorage.setItem('lang', e);
        setLang(e);
        changeLanguage(e);
    }
  
    return (
        <select onChange={(e) => setLanguage(e.target.value)} value={lang}>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}

export default SelectLanguage;