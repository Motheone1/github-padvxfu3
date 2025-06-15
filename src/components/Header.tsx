import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleUserProfileClick = () => {
    navigate('/user-profile');
  };

  return (
    <header className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
      <div className="flex-1"></div>
      <div className="flex items-center space-x-3 pr-2">
        <div className="static top-0 right-0 transform-none">
          <LanguageToggle />
        </div>
        <button
          onClick={handleUserProfileClick}
          className="static p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="User Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9c0-1.1.9-2 2-2h10a2 2 0 012 2v1a1 1 0 01-2 0v-1H5v1a1 1 0 01-2 0v-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
