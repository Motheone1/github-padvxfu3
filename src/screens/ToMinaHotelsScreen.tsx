import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '../components/LanguageToggle'; // Add this import
import { useLanguage } from '../context/LanguageContext'; // Add this import

const ToMinaHotelsScreen = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState('');
  const [showMapButton, setShowMapButton] = useState(false);
  const { language } = useLanguage(); // Add language context

  const hotels = [
    'Al Marwa Rayhaan by Rotana',
    'Mövenpick Hotel & Residence Hajar Tower Makkah',
    'Swissôtel Makkah',
    'Makkah Clock Royal Tower',
    'Raffles Makkah Palace'
  ];

  const handleHotelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHotel(e.target.value);
    setShowMapButton(true);
  };

  const handleOpenMaps = () => {
    if (selectedHotel) {
      const encodedHotel = encodeURIComponent(selectedHotel);
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedHotel}&travelmode=driving`, '_blank');
    }
  };

  const handleBack = () => {
    navigate('/mina-trips');
  };

  // Translations object
  const translations = {
    title: language === 'en' ? 'From Mina ' : '  من منى الى الفنادق ',
    description: language === 'en' 
      ? 'Select your hotel' 
      : 'اختر الفندق',
    selectLabel: language === 'en' ? 'Choose a hotel:' : 'اختر فندق:',
    placeholder: language === 'en' ? 'Select a hotel' : 'اختر فندق',
    buttonText: language === 'en' 
      ? 'Open Directions in Google Maps' 
      : 'فتح الاتجاهات في خرائط جوجل',
    backButton: language === 'en' ? 'Go back' : 'العودة'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-8 relative">
        <LanguageToggle /> {/* Add Language Toggle */}
        <button 
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label={translations.backButton} // Translated aria-label
        >
          <span className="text-2xl">←</span>
        </button>
        
        <div className="text-center">
          <div className="bg-emerald-100 text-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-arabic">⛺</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">{translations.title}</h1>
          <p className="text-gray-600 mt-2">{translations.description}</p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="hotel-select" className="block text-sm font-medium text-gray-700 mb-2">
              {translations.selectLabel}
            </label>
            <select
              id="hotel-select"
              value={selectedHotel}
              onChange={handleHotelChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="">{translations.placeholder}</option>
              {hotels.map((hotel, index) => (
                <option key={index} value={hotel}>
                  {hotel}
                </option>
              ))}
            </select>
          </div>

          {showMapButton && (
            <button
              onClick={handleOpenMaps}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
            >
              <span className="mr-2 text-xl">🗺️</span>
              {translations.buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToMinaHotelsScreen;
