
import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="hidden sm:block fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 min-w-[260px] animate-fade-in">
          <h3 className="font-semibold text-shikshak-blue mb-2">Contact us on WhatsApp</h3>
          <div className="space-y-2">
            <a 
              href="https://wa.me/9244947668?text=Hi%20Your%20Shikshak%20Team%20%F0%9F%91%8B%2C%20I%27m%20looking%20for%20a%20tutor.%20Details%3A%0AStudent%20Name%3A%20%0AClass%3A%20%0ASubjects%3A%20%0AMale%2FFemale%20Preference%3A%20%0ALocation%3A%20%0AGoogle%20Maps%20Link%3A%20%0AContact%20Number%3A%20"
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md w-full text-left text-shikshak-blue"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <span className="bg-shikshak-green text-white p-1 rounded-full">📚</span>
              <span>I need a home tutor</span>
            </a>
            
            <a 
              href="https://wa.me/9244947668?text=Hi%20Your%20Shikshak%20Team%20%F0%9F%91%8B%2C%20I%27d%20like%20to%20join%20as%20a%20tutor.%20Here%20are%20my%20details%3A%0AName%3A%20%0ASubjects%20I%20Can%20Teach%3A%20%0AExperience%3A%20%0AClasses%20I%20Can%20Handle%3A%20%0AContact%20Number%3A%20%0A%0APlease%20send%20me%20the%20registration%20form."
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md w-full text-left text-shikshak-blue"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <span className="bg-shikshak-yellow text-shikshak-blue p-1 rounded-full">👨‍🏫</span>
              <span>I want to become a tutor</span>
            </a>
          </div>
          <button 
            className="text-xs text-gray-500 mt-2 hover:underline w-full text-right"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="whatsapp-sticky bg-green-500 p-4 rounded-full shadow-lg flex items-center justify-center text-white"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;
