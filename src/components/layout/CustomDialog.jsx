import React, { useState, useEffect } from 'react';

const ScreenSizeNote = () => {
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 1024;
    const isSaved = localStorage.getItem('dismissedScreenSizeNote');
    if (isSmallScreen && isSaved === null) {
      setShowNote(true);
    }
  }, []);

  const handleClick = () => {
    setShowNote(false)
    localStorage.setItem('dismissedScreenSizeNote', true)
  }

  if (!showNote) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gray-300 max-w-sm mx-auto p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-semibold mb-4 text-yellow-700">
          ⚠️ Best Viewed on Desktop
        </h2>
        <p className="text-gray-700 mb-6">
          This website is optimized for desktop or laptop screens. You can continue on your current device, but the experience may be limited.
        </p>
        <button
          onClick={handleClick}
          className="bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-amber-300 text-white px-4 py-2 rounded"
        >
          Continue with site
        </button>
      </div>
    </div>
  );
};

export default ScreenSizeNote;
