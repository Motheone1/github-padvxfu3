// ShuttleTripsScreen.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const ShuttleTripsScreen = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleTripSelect = (tripOption) => {
    console.log(`Selected shuttle option: ${tripOption}`);
    navigate('/shuttle-guidance');
  };

  const handleBack = () => {
    navigate('/trip-type');
  };

  // Translations object
  const translations = {
    title: language === 'en' ? 'Shuttle Trips' : 'رحلات النقل',
    description: language === 'en' 
      ? 'Select your shuttle route' 
      : 'اختر مسار النقل الخاص بك',
    option1: language === 'en' 
      ? 'From Muzdalifah to Mina' 
      : 'من مزدلفة إلى منى',
    option2: language === 'en' 
      ? 'From Arafa to Muzdalifah' 
      : 'من عرفات إلى مزدلفة',
    footerText: language === 'en' 
      ? 'Your selection will determine the guidance content' 
      : 'سيحدد اختيارك محتوى التوجيهات',
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
            <span className="text-3xl">🚌</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">{translations.title}</h1>
          <p className="text-gray-600 mt-2">{translations.description}</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleTripSelect('muzdalifah-to-mina')}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
          >
            <span className="mr-2 text-xl">➡️⛺</span>
            {translations.option1}
          </button>

          <button
            onClick={() => handleTripSelect('arafa-to-muzdalifah')}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
          >
            <span className="mr-2 text-xl">➡️⛰️</span>
            {translations.option2}
          </button>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p>{translations.footerText}</p>
        </div>
      </div>
    </div>
  );
};

export default ShuttleTripsScreen;