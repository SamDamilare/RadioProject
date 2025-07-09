// import { IoMdPlay } from "react-icons/io";
// import { IoPlayForwardSharp } from "react-icons/io5";
// import { IoPlayBackSharp } from "react-icons/io5";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { MdOutlineFileDownload } from "react-icons/md";
// import { MdOutlineShare } from "react-icons/md";
// import { FaListUl } from "react-icons/fa";
// import { RxSpeakerLoud } from "react-icons/rx";
// import { useState, useRef, useEffect } from "react";

// const MusicBar = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);
//   const audioSrc =
//     "https://drive.google.com/file/d/1uZ6blLbuPE8Eg9AZtZy6o9peYFSSqqUU/view?usp=sharing"; // Replace with your audio URL

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleBackward = () => {
//     if (audioRef.current) {
//       audioRef.current.currentTime -= 10; // Rewind 10 seconds
//     }
//   };

//   const handleForward = () => {
//     if (audioRef.current) {
//       audioRef.current.currentTime += 10; // Forward 10 seconds
//     }
//   };

//   useEffect(() => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.play();
//       } else {
//         audioRef.current.pause();
//       }
//     }
//   }, [isPlaying]);
//   return (
//     <div className="flex justify-center bottom-0 fixed">
//       <div className="bg-black opacity-90 flex items-center gap-4 w-[1000px] justify-between rounded-t-[50px]">
//         <div
//           className="text-white h-full px-8 py-6 my-auto w-[180px] text- rounded-tl-[50px]"
//           style={{ background: "#ff3b2e" }}
//         >
//           <p className="text-[18px]">Listen Live</p>
//           <p className="text-xs mt-2 ">Now on Air</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <div
//             className="bg-white p-2.5 text"
//             style={{ borderRadius: "50%" }}
//             onClick={handleBackward}
//           >
//             <IoPlayBackSharp />
//           </div>
//           <div
//             className="bg-white p-2.5 flex items-center"
//             style={{ borderRadius: "50%" }}
//             onClick={handlePlayPause}
//           >
//             <IoMdPlay fontSize={"30px"} />
//           </div>
//           <div
//             className="bg-white p-2.5 flex items-center"
//             style={{ borderRadius: "50%" }}
//             onClick={handleForward}
//           >
//             <IoPlayForwardSharp />
//           </div>
//         </div>
//         <div className="text-white">
//           <p className="text-[18px]">New York's Best Music Variety</p>
//           <p className="text-xs mt-2">Person speaking</p>
//         </div>
//         <div className="flex items-center gap-4 p-8">
//           <div
//             className="p-2"
//             style={{ background: "white", borderRadius: "50%" }}
//           >
//             <IoMdHeartEmpty fontSize="20px" />
//           </div>

//           <div
//             className="p-2"
//             style={{ background: "white", borderRadius: "50%" }}
//           >
//             <MdOutlineFileDownload fontSize="20px" />
//           </div>

//           <div
//             className="p-2"
//             style={{ background: "white", borderRadius: "50%" }}
//           >
//             <MdOutlineShare fontSize="20px" />
//           </div>

//           <div
//             className="p-2"
//             style={{ background: "white", borderRadius: "50%" }}
//           >
//             <FaListUl fontSize="20px" />
//           </div>

//           <div
//             className="p-2"
//             style={{ background: "white", borderRadius: "50%" }}
//           >
//             <RxSpeakerLoud fontSize="20px" />
//           </div>
//         </div>
//       </div>
//       <audio ref={audioRef} src={audioSrc} style={{ display: "none" }} />
//     </div>
//   );
// };

// export default MusicBar;

import { useState, useRef, useEffect } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoPlayForwardSharp } from "react-icons/io5";
import { IoPlayBackSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineShare } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { RxSpeakerLoud } from "react-icons/rx";

const MusicBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioSrc = "https://koolfmlive.mixlr.com/events/4110690"; // Example audio URL

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="flex justify-center right-10 fixed bottom-0">
      <div className="bg-black opacity-90 flex items-center gap-4 w-[1000px] justify-between rounded-t-[50px]">
        <div
          className="text-white h-full px-8 py-6 my-auto w-[180px] text- rounded-tl-[50px]"
          style={{ background: "#ff3b2e" }}
        >
          <p className="text-[18px]">Listen Live</p>
          <p className="text-xs mt-2 ">Now on Air</p>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="bg-white p-2.5 text"
            style={{ borderRadius: "50%" }}
            onClick={handleBackward}
          >
            <IoPlayBackSharp />
          </div>
          <div
            className="bg-white p-2.5 flex items-center"
            style={{ borderRadius: "50%" }}
            onClick={handlePlayPause}
          >
            <IoMdPlay fontSize={"30px"} />
          </div>
          <div
            className="bg-white p-2.5 flex items-center"
            style={{ borderRadius: "50%" }}
            onClick={handleForward}
          >
            <IoPlayForwardSharp />
          </div>
        </div>
        <div className="text-white">
          <p className="text-[18px]">New York's Best Music Variety</p>
          <p className="text-xs mt-2">Person speaking</p>
        </div>
        <div className="flex items-center gap-4 p-8">
          <div
            className="p-2"
            style={{ background: "white", borderRadius: "50%" }}
          >
            <IoMdHeartEmpty fontSize="20px" />
          </div>

          <div
            className="p-2"
            style={{ background: "white", borderRadius: "50%" }}
          >
            <MdOutlineFileDownload fontSize="20px" />
          </div>

          <div
            className="p-2"
            style={{ background: "white", borderRadius: "50%" }}
          >
            <MdOutlineShare fontSize="20px" />
          </div>

          <div
            className="p-2"
            style={{ background: "white", borderRadius: "50%" }}
          >
            <FaListUl fontSize="20px" />
          </div>

          <div
            className="p-2"
            style={{ background: "white", borderRadius: "50%" }}
          >
            <RxSpeakerLoud fontSize="20px" />
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={audioSrc} style={{ display: "none" }} />
    </div>
  );
};

export default MusicBar;
