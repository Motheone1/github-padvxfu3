import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const TripTypeScreen = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleTripSelect = (tripType: string) => {
    if (tripType === 'Arafa') {
      navigate('/arafa-trips');
    } else if (tripType === 'Mina') {
      navigate('/mina-trips');
    } else {
      navigate('/shuttle-trips');
    }
  };

  // Translations
  const translations = {
        title: language == 'en'? 'HudaNav' : 'هدى لإرشاد الحافلات',
    subtitle: language === 'en' ? 'Select Trip Type' : 'اختر نوع الرحلة',
    arafa: language === 'en' ? 'Arafa' : 'عرفة',
    mina: language === 'en' ? 'Mina' : 'منى',
    shuttle: language === 'en' ? 'Shuttle' : 'الترددية',
    footer: language === 'en' 
      ? 'Your selection will determine the guidance content' 
      : 'سيحدد اختيارك محتوى الإرشاد'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-8 relative">
        <LanguageToggle />
        
        <div className="text-center">
          <div className="bg-indigo-100 text-indigo-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            {/* Bus emoji added here */}
            <span className="text-3xl">🚌</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">{translations.title}</h1>
          <p className="text-gray-600 mt-2">{translations.subtitle}</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleTripSelect('Arafa')}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
          >
            <span className="mr-2 text-xl">⛰️</span>
            {translations.arafa}
          </button>

          <button
            onClick={() => handleTripSelect('Mina')}
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
          >
            <span className="mr-2 text-xl">⛺</span>
            {translations.mina}
          </button>

          <button
            onClick={() => handleTripSelect('Shuttle')}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
          >
            <span className="mr-2 text-xl">🚌</span>
            {translations.shuttle}
          </button>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p>{translations.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default TripTypeScreen;