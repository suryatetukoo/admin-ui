import React from 'react';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} 
    >
      
      {/* Kotak Modal */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <div className="mb-4 text-red-500">
           {/* Icon Warning */}
           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
           </svg>
        </div>

        <h2 className="text-lg font-bold text-gray-800 mb-2">Konfirmasi Logout</h2>
        <p className="text-gray-500 mb-6 text-sm">Apakah Anda yakin ingin keluar?</p>
        
        <div className="flex justify-center gap-4">
          <button 
            type="button" 
            onClick={onClose}
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 text-sm font-semibold"
          >
            Batal
          </button>

          <button 
            type="button"
            onClick={onConfirm} 
            className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 text-sm font-semibold"
          >
            Ya, Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;