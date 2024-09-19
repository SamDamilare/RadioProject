import { React, useState } from "react";
import ReactCardFlip from "react-card-flip";

function ScheduleCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div
          className="w-[150px] h-[150px] mt-8 mx-4 p-4 rounded-lg bg-[white] "
          onClick={flipCard} // Trigger flip on mouse over
          //   onMouseOut={flipCard}
        >
          <h1>Title</h1>
          <h1 className="mt-8">00:00:AM</h1>
        </div>
        <div
          className="w-[250px] mt-8 mx-4 p-4 h-[150px] rounded-lg bg-[black] text-[white]"
          onClick={flipCard}
        >
          <h1>Title</h1>
          <h1 className="mt-6">00:00:AM</h1>
          <h1 className="mt-6 text-xs">Something Short and simple here</h1>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default ScheduleCard;
