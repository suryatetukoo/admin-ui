import { useState } from 'react';

function PostCard(props) {
  const { id, userId, title, body } = props; 
  const [clicked, setClicked] = useState(false);

return (
   <div 
      className={`
        group bg-white p-6 rounded-lg shadow border
        transition-all duration-300 
        hover:shadow-xl hover:scale-[1.02] hover:bg-red-50 hover:border-black
        ${clicked ? 'border-special-red2' : 'border-gray-200'}
      `}
    >
      <div className="flex flex-col h-full">
        
        <div className="flex-grow mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 text-sm">
            {body}
          </p>
        </div>
        
        <div>
          <button
            onClick={() => setClicked(!clicked)}
            className={`
              w-full p-3 rounded-md text-white font-semibold 
              transition-all duration-300 group-hover:opacity-80 hover:scale-105
              ${clicked ? 'bg-special-red2' : 'bg-gray-500'}
            `}
          >
            {clicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
          </button>
        </div>

      </div>
    </div>
  );
}

export default PostCard;