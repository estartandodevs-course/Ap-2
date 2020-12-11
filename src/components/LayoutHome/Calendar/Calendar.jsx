import Typography from "../../Typography/Typography";
import "./Calendar.scss";
import React, { useState } from "react";
import { months } from "../../../mocks/Months";
import previous from "../../../assets/icons/arrow_back_ios_24px.png";
import next from "../../../assets/icons/arrow_forward_ios_24px.png";
import { Button } from "../../Button/Button";
import ContainerCard from "../../ContainerCard/containerCard";

export function Calendar() {
  // const d = new Date();
  // const current = months[d.getMonth()];
  const [currentMonth, setMonth] = useState(1);

  let showCurrentMonth = months.filter((option) => {
    return option.id === currentMonth;
  });

  return (
    <div className="calendar">
      <Typography type="title">Agenda</Typography>
      <ContainerCard width="256px" height="221px" className="calendar-content">
        {showCurrentMonth.map((option) => {
          return (
            <div className="months" key={option.id}>
              <div className="months-header">
                <Button
                  width="15.55px"
                  height="13.42px"
                  className="btn btn-arrows"
                  onClick={() =>
                    currentMonth === 1 ? setMonth(12) : setMonth(option.id - 1)
                  }
                >
                  <img src={previous} alt="Anterior"></img>
                </Button>
                <span className="month-name">{option.month}</span>
                <Button
                  width="15.55px"
                  height="13.42px"
                  className="btn btn-arrows"
                  onClick={() =>
                    currentMonth === 12 ? setMonth(1) : setMonth(option.id + 1)
                  }
                >
                  <img src={next} alt="Próximo"></img>
                </Button>
              </div>
              <div className="tasks">
                {option.tasks.map((calendar, index) => {
                  return (
                    <div key={index} className="tasks-content">
                      <hr></hr>
                      <span className="calendar-date">{calendar.day}</span>
                      <span className="task-date">{calendar.taskName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </ContainerCard>
    </div>
  );
}
