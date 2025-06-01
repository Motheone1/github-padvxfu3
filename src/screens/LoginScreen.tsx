import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const LoginScreen = () => {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [officeNumber, setOfficeNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateOfficeNumber = (number: string) => {
    const num = parseInt(number);
    return num >= 0 && num <= 999;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!/^\d{10}$/.test(phone)) {
      setError(language === 'en' 
        ? 'Phone number must be 10 digits' 
        : 'يجب أن يتكون رقم الهاتف من 10 أرقام');
      return;
    }
    
    if (!validateOfficeNumber(officeNumber)) {
      setError(language === 'en' 
        ? 'Invalid office number. Contact your administrator.' 
        : 'رقم المكتب غير صالح. يرجى الاتصال بمسؤولك.');
      return;
    }
    
    navigate('/trip-type');
  };

  // Translations
  const translations = {
    title: language === 'en' ? 'Hudanav' : 'هدى ',
    subtitle: language === 'en' ? 'Bus guidance app' : 'تطبيق إرشاد الحافلات',
    nameLabel: language === 'en' ? 'Full Name' : 'الاسم الكامل',
    phoneLabel: language === 'en' ? 'Phone Number' : 'رقم الهاتف',
    phonePlaceholder: language === 'en' ? '10-digit number' : '10 أرقام',
    officeLabel: language === 'en' ? 'Office Number' : 'رقم المكتب',
    submit: language === 'en' ? 'Submit' : 'تسجيل',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-6 relative">
        <LanguageToggle />
        
        <div className="text-center">
          <div className="bg-green-100 text-green-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-arabic"></span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">{translations.title}</h1>
          <p className="text-gray-600 mt-2">{translations.subtitle}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {translations.nameLabel}
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder={translations.nameLabel}
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              {translations.phoneLabel}
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder={translations.phonePlaceholder}
              maxLength={10}
              required
            />
          </div>
          
          <div>
            <label htmlFor="office" className="block text-sm font-medium text-gray-700 mb-1">
              {translations.officeLabel}
            </label>
            <select
              id="office"
              value={officeNumber}
              onChange={(e) => setOfficeNumber(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">{translations.officeLabel}</option>
              {Array.from({ length: 1000 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md"
          >
            ✋ {translations.submit}
          </button>
        </form>
        
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>{translations.terms}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
