// ShuttleGuidanceScreen.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const ShuttleGuidanceScreen = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleBack = () => {
    navigate('/shuttle-trips');
  };

  // Translations
  const translations = {
    title: language === 'en' ? 'Road Guidance' : 'الإرشادات على الطريق',
    description: language === 'en' 
      ? 'Follow the individual guides along the route' 
      : 'اتبع الإرشادات الفردية على طول الطريق',
    backButton: language === 'en' ? 'Go back' : 'العودة'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-8 relative">
        <LanguageToggle />
        <button 
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label={translations.backButton}
        >
          <span className="text-2xl">←</span>
        </button>
        
        <div className="text-center">
          <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-arabic">🛑</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">{translations.title}</h1>
          <p className="text-gray-600 mt-2">{translations.description}</p>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h2 className="text-lg font-medium text-blue-800 mb-2">
            {language === 'en' ? 'Important Instructions' : 'تعليمات مهمة'}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>{language === 'en' ? 'Follow official signage' : 'اتبع الإشارات الرسمية'}</li>
            <li>{language === 'en' ? 'Stay with your group' : 'ابقَ مع مجموعتك'}</li>
            <li>{language === 'en' ? 'Observe traffic rules' : 'احترم قواعد المرور'}</li>
            <li>{language === 'en' ? 'Listen to guide instructions' : 'استمع لتعليمات المرشد'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShuttleGuidanceScreen; 