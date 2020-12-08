import Typography from "../../Typography/Typography";
import "./Calendar.scss";
import React, { useState } from "react";
import { months } from "../../../mocks/Months";

export function Calendar() {
  const [isCliked, setClick] = useState(false);
  const d = new Date();
  const current = months[d.getMonth()];
  const [currentMonth, setMonth] = useState(current);

  const previousMonth = (id) => {
    setMonth(current - id);
    console.log(currentMonth);
  };

  function nextMonth(value) {
    setMonth(current + value);
  }
  console.log(currentMonth);
  return (
    <div className="calendar">
      <Typography type="title">Agenda</Typography>
      <div className="calendar-content">
         
        {months.map((option) => {
          return (
            <div
              className="months"
              key={option.id}
              onClick={() => setClick(true)}
            >
              <button onClick={() => setMonth(option.id - 1)}>anterior</button>
              <span>{option.month}</span>
              <button onClick={() => setMonth(option.id + 1)}>proximo</button>

              <div>
               
                {option.tasks.map((calendar, index) => {
                  return (
                    <div key={index}>
                      <span>{calendar.day}</span>
                      <span>{calendar.taskName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
