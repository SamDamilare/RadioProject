// import ScheduleCard from "./ScheduleCard";
import DailyCards from "./DailyCards";

import HoverExpandCards from "./HoverExpandCards";

const CardColumn = () => {
  return (
    <div className="flex items-center mx-0">
      <DailyCards />
      <div>
        <HoverExpandCards />
      </div>
    </div>
  );
};

export default CardColumn;
