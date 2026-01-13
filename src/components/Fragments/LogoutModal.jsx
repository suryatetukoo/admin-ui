import React from "react";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-3xl p-8 w-[90%] max-w-sm shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#299D91] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#299D91] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-full bg-[#EAF7F6] flex items-center justify-center mb-6 ring-8 ring-[#299D91]/10">
            <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#299D91] translate-x-1"
            >
                <path d="M15.75 9V5.25C15.75 4.65326 15.5129 4.08097 15.091 3.65901C14.669 3.23705 14.0967 3 13.5 3H7.5C6.90326 3 6.33097 3.23705 5.90901 3.65901C5.48705 4.08097 5.25 4.65326 5.25 5.25V18.75C5.25 19.3467 5.48705 19.919 5.90901 20.341C6.33097 20.7629 6.90326 21 7.5 21H13.5C14.0967 21 14.669 20.7629 15.091 20.341C15.5129 19.919 15.75 19.3467 15.75 18.75V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 9L15 12M15 12L12 15M15 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-2">LogOut?</h3>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed px-2">
            Are you sure you want to leave? <br/>
            You'll need to login again to access your wallet.
          </p>

          <div className="flex gap-3 w-full">
            <button 
                onClick={onClose}
                className="flex-1 px-5 py-3 rounded-xl text-gray-600 font-semibold bg-gray-50 hover:bg-gray-300 active:scale-95 transition-all duration-200"
            >
                Cancel
            </button>
            
            <button 
                onClick={onConfirm}
                className="flex-1 px-5 py-3 rounded-xl text-white font-semibold bg-[#299D91] hover:bg-[#207c72] active:scale-95 transition-all duration-200 shadow-lg shadow-[#299D91]/40"
            >
                Yes, Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
