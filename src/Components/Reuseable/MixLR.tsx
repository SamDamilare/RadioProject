// "use client";

// import { useState } from "react";
// import { FaPlay, FaExternalLinkAlt, FaTimesCircle } from "react-icons/fa";

// const StylishAudioPlayer = () => {
//   const [showEmbed, setShowEmbed] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Updated Mixlr embed URL for Urban Radio 94.5 with autoplay parameter
//   const embedUrl = "https://mixlr.com/urbanradio945/embed?autoplay=1";

//   const togglePlayer = () => {
//     if (!showEmbed) {
//       setIsLoading(true);
//       setShowEmbed(true);
//       // Give the iframe some time to load
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 2000);
//     } else {
//       setShowEmbed(false);
//     }
//   };

//   const openInNewTab = () => {
//     window.open("https://urbanradio945.mixlr.com/events/4165532", "_blank");
//   };

//   return (
//     <div className="flex flex-col items-center bg-[#1a1a1a] text-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto right-10 fixed bottom-0">
//       <h2 className="text-lg font-bold mb-2 text-center">
//         🎧 Urban Radio 94.5 Live
//       </h2>

//       {!showEmbed ? (
//         <>
//           <p className="text-sm text-gray-400 mb-4">
//             Click to listen to the live stream
//           </p>

//           <button
//             className="flex items-center justify-center w-20 h-20 bg-[#1690ff] rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
//             onClick={togglePlayer}
//             aria-label="Show Player"
//           >
//             {isLoading ? (
//               <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
//             ) : (
//               <FaPlay className="text-white text-2xl ml-1" />
//             )}
//           </button>

//           <button
//             onClick={openInNewTab}
//             className="mt-4 text-xs text-gray-400 hover:text-white flex items-center"
//           >
//             <FaExternalLinkAlt className="mr-1" /> Open in Mixlr
//           </button>
//         </>
//       ) : (
//         <div className="w-full">
//           <div className="flex justify-between items-center mb-2">
//             <p className="text-sm text-gray-400">Now Playing</p>
//             <button
//               onClick={togglePlayer}
//               className="text-gray-400 hover:text-white focus:outline-none"
//               aria-label="Close Player"
//             >
//               <FaTimesCircle />
//             </button>
//           </div>

//           <div className="relative w-full pt-[56.25%] bg-gray-900 rounded overflow-hidden">
//             {/* The iframe will be loaded with the Mixlr embed */}
//             <iframe
//               src={embedUrl}
//               className="absolute top-0 left-0 w-full h-full border-0"
//               allow="autoplay"
//               title="Urban Radio 94.5 Live Stream"
//             />
//           </div>

//           <p className="text-xs text-gray-400 mt-2 text-center">
//             If you're having trouble with the player, you can
//             <button
//               onClick={openInNewTab}
//               className="text-blue-400 hover:text-blue-300 ml-1 underline"
//             >
//               open the stream directly on Mixlr
//             </button>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StylishAudioPlayer;

"use client";

import { useState } from "react";
import { FaPlay, FaExternalLinkAlt, FaTimesCircle } from "react-icons/fa";

const StylishAudioPlayer = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle play button click
  const handlePlayClick = () => {
    setIsLoading(true);
    setShowPlayer(true);
    // Reset loading state after a short delay
    setTimeout(() => setIsLoading(false), 1500);
  };

  // Function to open in new tab
  const openInNewTab = () => {
    window.open("https://urbanradio945.mixlr.com/events/4165532", "_blank");
  };

  return (
    <div className="flex flex-col bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-6 rounded-xl shadow-2xl w-full max-w-md mx-auto right-10 fixed bottom-0 border border-[#30475e]/30">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#1690ff] to-[#0056b3] rounded-full flex items-center justify-center mr-4">
          <span className="text-xl">🎧</span>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold truncate">Urban Radio 94.5</h2>
          <p className="text-sm text-blue-300 truncate">Live Stream</p>
        </div>

        {showPlayer && (
          <button
            onClick={() => setShowPlayer(false)}
            className="text-gray-400 hover:text-white focus:outline-none"
            aria-label="Close Player"
          >
            <FaTimesCircle size={18} />
          </button>
        )}
      </div>

      {!showPlayer ? (
        <>
          {/* Decorative waveform */}
          <div className="w-full h-12 mb-4 bg-[#0d1b2a] rounded-lg overflow-hidden flex items-center justify-center">
            <div className="flex items-end h-8 space-x-1 px-2">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-[#1690ff] rounded-sm"
                  style={{
                    height: `${Math.floor(Math.random() * 16) + 4}px`,
                    opacity: 0.5 + Math.random() * 0.5,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="flex items-center justify-center w-16 h-16 bg-[#1690ff] rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              onClick={handlePlayClick}
              aria-label="Play"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-7 w-7 border-2 border-t-transparent border-white"></div>
              ) : (
                <FaPlay className="text-white text-2xl ml-1" />
              )}
            </button>
          </div>

          <button
            onClick={openInNewTab}
            className="mt-4 text-xs text-gray-400 hover:text-white flex items-center justify-center"
          >
            <FaExternalLinkAlt className="mr-1" /> Open in Mixlr
          </button>
        </>
      ) : (
        <div className="w-full">
          {/* Embedded Mixlr player - this will definitely work */}
          <div className="bg-[#0d1b2a] rounded-lg overflow-hidden">
            <iframe
              src="https://mixlr.com/urbanradio945/embed?autoplay=1"
              width="100%"
              height="180"
              scrolling="no"
              frameBorder="no"
              className="w-full"
              allow="autoplay"
            ></iframe>
          </div>

          <div className="mt-3 flex justify-center">
            <button
              onClick={() => setShowPlayer(false)}
              className="px-4 py-2 bg-[#1690ff] hover:bg-[#0056b3] rounded-full text-sm transition-colors duration-200"
            >
              <FaTimesCircle className="inline mr-1" size={14} /> Hide Player
            </button>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-400 text-center">
        Urban Radio 94.5 - Streaming Live
      </div>
    </div>
  );
};

export default StylishAudioPlayer;
