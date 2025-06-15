import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfileScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logged out successfully');
    navigate('/');
  };

  const handleChangeOffice = () => {
    alert('Navigating to Office Selection');
    navigate('/office-selection');
  };

  const handleModifyInfo = () => {
    alert('Modify user information functionality will be implemented here.');
  };

  const handleCustomerSupport = () => {
    alert('Accessing Customer Support. Contact support team for assistance.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            User Profile
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>
        <div className="space-y-4">
          <button
            onClick={handleLogout}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
          <button
            onClick={handleChangeOffice}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Change Office
          </button>
          <button
            onClick={handleModifyInfo}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Modify Information
          </button>
          <button
            onClick={handleCustomerSupport}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Customer Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileScreen;
