import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const ToMinaHotelsScreen = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState('');
  const [showMapButton, setShowMapButton] = useState(false);
  const { language } = useLanguage();

  // Hardcoded hotel data from "fromMina to hotels.csv"
  const hotelsData = [
    { 
      name: 'جوهرة البيان (٤١ ب)', 
      url: 'https://maps.app.goo.gl/36Q6tY5ZndiXb1Dt7'  
    },
    { 
      name: 'صفوة الشروق (٤١ ب)', 
      url: 'https://maps.app.goo.gl/PDuWWDjVPTEb1iVc7'  
    },
    { 
      name: 'الاحباب الكبرى (٤١ ب)', 
      url: 'https://maps.app.goo.gl/Nrn2Rh7moc2jFYB48'  
    },
    { 
      name: 'روضة التوحيد (٤١ ب)', 
      url: 'https://maps.app.goo.gl/415koMr4rpgYCWSQA'  
    },
    { 
      name: 'روضة الشريعة (٤١ ب)', 
      url: 'https://maps.app.goo.gl/UPqdRYTk1mmkPUqr5'  
    },
    { 
      name: 'العلاء٣ (٤١ ب)', 
      url: 'https://maps.app.goo.gl/JPUa9pEvGiVTSYRW7'  
    },
    { 
      name: 'مسارات السماح (٤١ ب) مدخل الفندق من الجنب', 
      url: 'https://maps.app.goo.gl/8SAnvihE6y521tHP6'  
    },
    { 
      name: 'مورو العالمية (أ)', 
      url: 'https://maps.app.goo.gl/a4gpjfhgewDRaio28'  
    },
    { 
      name: 'زهرة السعد (أ)', 
      url: 'https://maps.app.goo.gl/2rtdzT9ZQj28QZiFA'  
    },
    { 
      name: 'دار المقام (أ)', 
      url: 'https://maps.app.goo.gl/nQ9sKYqhf9fFvsMw8'  
    },
    { 
      name: 'جواد الحرم (أ)', 
      url: 'https://maps.app.goo.gl/kPX49nQ8uR5PXJ6V6'  
    },
    { 
      name: 'ديار العروبة (أ)', 
      url: 'https://maps.app.goo.gl/vSLTePfWe9KPSmZo9'  
    },
    { 
      name: 'مسارات مثمرة (أ)', 
      url: 'https://maps.app.goo.gl/myJdXASKtHaAKyPk6'  
    },
    { 
      name: 'جوهرة الشروق + أثير المشاعر (أ)', 
      url: 'https://maps.app.goo.gl/6T6rHTRouWeW45BG6'  
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

  // Translations object
  const translations = {
    title: language === 'en' ? 'From Mina' : 'من منى إلى الفنادق',
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

export default ToMinaHotelsScreen;
