import React from "react";
import ScheduleCard from "./ScheduleCard";
import DailyCards from "./DailyCards";

const CardColumn = () => {
  return (
    <div className="grid grid-cols-7 gap-[12px]">
      <DailyCards />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
      <ScheduleCard />
    </div>
  );
};

export default CardColumn;
