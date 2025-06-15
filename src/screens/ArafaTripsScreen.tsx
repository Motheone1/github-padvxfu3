import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useLanguage } from '../context/LanguageContext';

const ArafaTripsScreen = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleTripSelect = (tripOption: string) => {
    console.log(`Selected trip option: ${tripOption}`);
    if (tripOption === 'bus-depot') {
      navigate('/bus-depot-hotels');
    } else if (tripOption === 'arafa') {
      navigate('/arafat-hotels');
    } else if (tripOption === 'hotels') {
      navigate('/from-hotels-hotels');
    }
  };

  const handleBack = () => {
    navigate('/trip-type');
  };

  // Translations
  const translations = {
    title: language === 'en' ? 'Arafa Trips' : 'رحلات عرفة',
    subtitle: language === 'en' ? 'Select your starting point' : 'اختر نقطة البداية',
    busDepot: language === 'en' ? 'From the bus depot' : 'من موقف الحافلات',
    arafa: language === 'en' ? 'From Arafa' : 'من عرفة',
    hotels: language === 'en' ? 'From hotels' : 'من الفنادق',
    footer: language === 'en' 
      ? 'Your selection will determine the guidance content' 
      : 'سيحدد اختيارك محتوى الإرشاد'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-8 relative">
        <Header />
        <button 
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label={language === 'en' ? 'Go back' : 'العودة'}
        >
          <span className="text-2xl">←</span>
        </button>
        
        <div className="text-center">
          <div className="bg-indigo-100 text-indigo-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">⛰️</span>

          </div>
          <h1 className="text-3xl font-bold text-gray-800">{translations.title}</h1>
          <p className="text-gray-600 mt-2">{translations.subtitle}</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleTripSelect('bus-depot')}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
          >
            <span className="mr-2 text-xl">🚏</span>
            {translations.busDepot}
          </button>

          <button
            onClick={() => handleTripSelect('arafa')}
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
          >
            <span className="mr-2 text-xl">⛰️</span>
            {translations.arafa}
          </button>

          <button
            onClick={() => handleTripSelect('hotels')}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
          >
            <span className="mr-2 text-xl">🏨</span>
            {translations.hotels}
          </button>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p>{translations.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default ArafaTripsScreen;
