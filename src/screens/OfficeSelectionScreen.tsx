import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const OfficeSelectionScreen: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [showDepartments, setShowDepartments] = useState(false);
  const navigate = useNavigate();

  const handleOfficeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOffice(event.target.value);
    setShowDepartments(!!event.target.value);
    setSelectedDepartment(''); // Reset department selection when office changes
  };

  const handleDepartmentSelect = (dept: string) => {
    setSelectedDepartment(dept);
  };

  const handleContinue = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedOffice && selectedDepartment) {
      alert(`Selected ${selectedOffice}, Department ${selectedDepartment}`);
      // Navigate to the next page after selection (e.g., trip type screen)
      navigate('/trip-type');
    } else {
      alert('Please select an office and a department.');
    }
  };

  // Mock list of offices for dropdown (in a real app, this would come from backend)
  const offices = Array.from({ length: 100 }, (_, i) => `Office ${i + 1}`);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Office & Department Selection
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Choose your office and department to proceed
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleContinue}>
            <div>
              <label htmlFor="office" className="block text-sm font-medium text-gray-700 mb-1">
                Select Office
              </label>
              <select
                id="office"
                name="office"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedOffice}
                onChange={handleOfficeChange}
                required
              >
                <option value="">-- Select Office --</option>
                {offices.map((office) => (
                  <option key={office} value={office}>
                    {office}
                  </option>
                ))}
              </select>
            </div>

            {showDepartments && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Department
                </label>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className={`inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
                      selectedDepartment === 'A' 
                        ? 'border-indigo-500 bg-indigo-100 text-indigo-700' 
                        : 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    onClick={() => handleDepartmentSelect('A')}
                  >
                    Section A
                  </button>
                  <button
                    type="button"
                    className={`inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
                      selectedDepartment === 'B' 
                        ? 'border-indigo-500 bg-indigo-100 text-indigo-700' 
                        : 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    onClick={() => handleDepartmentSelect('B')}
                  >
                    Section B
                  </button>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={!selectedOffice || !selectedDepartment}
              >
                Continue
              </button>
              {!selectedOffice || !selectedDepartment ? (
                <p className="mt-2 text-center text-xs text-gray-500">
                  Select both office and department to continue
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfficeSelectionScreen;
