import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const MinaTripsScreen = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleTripSelect = (tripOption: string) => {
    if (tripOption === 'to-mina') {
      navigate('/to-mina-hotels');
    } else if (tripOption === 'to-hotels') {
      navigate('/mina-to-hotels-hotels');
    }
  };

  const handleBack = () => {
    navigate('/trip-type');
  };

  // Translations
  const translations = {
    title: language === 'en' ? 'Mina Trips' : 'رحلات منى',
    subtitle: language === 'en' ? 'Select your destination' : 'اختر وجهتك',
    toHotels: language === 'en' ? 'From Hotels' : ' من الفنادق ',
    toMina: language === 'en' ? 'From Mina' : ' من منى ',
    footer: language === 'en' 
      ? 'Your selection will determine the guidance content' 
      : 'سيحدد اختيارك محتوى الإرشاد'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-8 relative">
        <LanguageToggle />
        <button 
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label={language === 'en' ? 'Go back' : 'العودة'}
        >
          <span className="text-2xl">←</span>
        </button>
        
        <div className="text-center">
          <div className="bg-green-100 text-green-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-arabic">⛺</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">{translations.title}</h1>
          <p className="text-gray-600 mt-2">{translations.subtitle}</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleTripSelect('to-hotels')}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
          >
            <span className="mr-2 text-xl">🏨</span>
            {translations.toHotels}
          </button>

          <button
            onClick={() => handleTripSelect('to-mina')}
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
          >
            <span className="mr-2 text-xl">⛺</span>
            {translations.toMina}
          </button>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p>{translations.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default MinaTripsScreen;
