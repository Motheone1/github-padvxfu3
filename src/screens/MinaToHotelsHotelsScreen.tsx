import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const MinaToHotelsHotelsScreen = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState('');
  const [showMapButton, setShowMapButton] = useState(false);
  const { language } = useLanguage();

  // Hardcoded hotel data from "fromhotels to mina.csv"
  const hotelsData = [
    { 
      name: 'جوهرة البيان (٤١ ب)', 
      url: 'https://maps.app.goo.gl/wwHok4Zh1pqqeM8FA'  
    },
    { 
      name: 'صفوة الشروق (٤١ ب)', 
      url: 'https://maps.app.goo.gl/UGjf9u2j7c9yqqSU9'  
    },
    { 
      name: 'الاحباب الكبرى (٤١ ب)', 
      url: 'https://maps.app.goo.gl/cwxNGGgbmgem9RKe6'  
    },
    { 
      name: 'روضة التوحيد (٤١ ب)', 
      url: 'https://maps.app.goo.gl/FBRZFAKreCfKrLpP9'  
    },
    { 
      name: 'روضة الشريعة (٤١ ب)', 
      url: 'https://maps.app.goo.gl/4zHnUfvKTKNSdUkD9'  
    },
    { 
      name: 'العلاء٣ (٤١ ب)', 
      url: 'https://maps.app.goo.gl/ZA6ACeeHL3KB5yM79'  
    },
    { 
      name: 'مسارات السماح (٤١ ب) مدخل الفندق من الجنب', 
      url: 'https://maps.app.goo.gl/Qg4WSMrpm2y41zQV9'  
    },
    { 
      name: 'مورو العالمية (أ)', 
      url: 'https://maps.app.goo.gl/u8Bcb6QpSjoCibvK9'  
    },
    { 
      name: 'زهرة السعد (أ)', 
      url: 'https://maps.app.goo.gl/a9wk4ksZrjYaLEBY9'  
    },
    { 
      name: 'دار المقام (أ)', 
      url: 'https://maps.app.goo.gl/zhEPkGRjFvBBwCbPA'  
    },
    { 
      name: 'جواد الحرم (أ)', 
      url: 'https://maps.app.goo.gl/qB9QYhC7VvvyHmPm8'  
    },
    { 
      name: 'ديار العروبة (أ)', 
      url: 'https://maps.app.goo.gl/yS3rrSiyeDZ8YjEY9'  
    },
    { 
      name: 'مسارات مثمرة (أ)', 
      url: 'https://maps.app.goo.gl/yuq4kkjnWzZyow1Z8'  
    },
    { 
      name: 'جوهرة الشروق + أثير المشاعر (أ)', 
      url: 'https://maps.app.goo.gl/gV6qP7CV9x21qZg99'  
    }
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
    navigate('/mina-trips');
  };

  // Translations object - same pattern as first code
  const translations = {
    title: language === 'en' ? 'From Hotels' : 'من الفنادق إلى منى',
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
        <LanguageToggle />
        <button 
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label={translations.backButton}
        >
          <span className="text-2xl">←</span>
        </button>
        
        <div className="text-center">
          <div className="bg-emerald-100 text-emerald-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-arabic">🏨</span>
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

export default MinaToHotelsHotelsScreen;
