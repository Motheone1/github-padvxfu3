import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const ArafatHotelsScreen = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState('');
  const [showMapButton, setShowMapButton] = useState(false);

  // Hardcoded hotel data from CSV
  const hotelsData = [
    { name: 'جوهرة البيان', url: 'https://maps.app.goo.gl/u2QXk2NnEoWGfTFcA'  },
    { name: 'صفوة الشروق', url: 'https://maps.app.goo.gl/Fj93PoXoePQPYi8B9'  },
    { name: 'الاحباب الكبرى', url: 'https://maps.app.goo.gl/Yhxve1JJ6mF9fYty6'  },
    { name: 'روضة التوحيد', url: 'https://maps.app.goo.gl/CNKzJhFX8Q3JFsFS7'  },
    { name: 'روضة الشريعة', url: 'https://maps.app.goo.gl/U6D4JqiMJPm88rgD7'  },
    { name: 'العلاء٣', url: 'https://maps.app.goo.gl/DAy3XYY8YBb4b7Tt7'  },
    { name: 'مسارات السماح  مدخل الفندق من الجنب', url: 'https://maps.app.goo.gl/PnV95KTjcwyABUm38'  }
  ];

  const handleHotelChange = (e) => {
    setSelectedHotel(e.target.value);
    setShowMapButton(true);
  };

  const handleOpenMaps = () => {
    if (selectedHotel) {
      const hotel = hotelsData.find(h => h.name === selectedHotel);
      if (hotel?.url) {
        window.open(hotel.url, '_blank');
      }
    }
  };

  const handleBack = () => {
    navigate('/arafa-trips');
  };

  // Translations
  const translations = {
    title: language === 'en' ? 'Arafa Hotels' : ' من عرفة للفنادق',
    selectLabel: language === 'en' ? 'Choose a hotel:' : 'اختر فندق:',
    buttonText: language === 'en' ? 'Open in Google Maps' : 'افتح في خرائط جوجل',
    backButton: language === 'en' ? 'Go back' : 'العودة'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
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
          <div className="bg-indigo-100 text-indigo-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⛰️</span>
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">{language === 'en' ? 'Select a hotel' : 'اختر فندق'}</option>
              {hotelsData.map((hotel, index) => (
                <option key={index} value={hotel.name}>
                  {hotel.name}
                </option>
              ))}
            </select>
          </div>

          {showMapButton && (
            <button
              onClick={handleOpenMaps}
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
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

export default ArafatHotelsScreen;
