import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-opacity-30 transition-all"
      aria-label={language === 'en' ? 'Switch to Arabic' : 'التغيير إلى الإنجليزية'}
    >
      {language === 'en' ? 'عربي' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
