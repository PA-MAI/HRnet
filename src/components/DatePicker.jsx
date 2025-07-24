import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { enUS } from "date-fns/locale";
import { FaChevronLeft, FaChevronRight, FaChevronDown, FaHome } from "react-icons/fa";



export default function DatePicker({ id, label, value, onChange }) {
    const [showMonthDropdown, setShowMonthDropdown] = useState(false);
    const [showYearDropdown, setShowYearDropdown] = useState(false);
    const handleChange = (date) => {
    const fakeEvent = {
        target: {
          id: id,
          value: date?.toISOString().split("T")[0] || "",
        },
      };
      onChange(fakeEvent);
    };

    const months = Array.from({ length: 12 }).map((_, index) =>
    new Date(0, index).toLocaleString("en-US", { month: "long" })
    );

  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i);


 return (
    <div className="dates__picker">
      <label htmlFor={id}>{label}</label>
      <ReactDatePicker
        id={id}
        selected={value ? new Date(value) : null}
        onChange={handleChange}
        dateFormat="MM/dd/yyyy"
        locale={enUS}
        placeholderText="MM/DD/YYYY"
        calendarClassName="custom-calendar"
        dayClassName={(date) => {
          const today = new Date();
          const isToday =
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
          return isToday ? "day-today" : "day-default";
        }}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => {
          const changeToToday = () => {
            const today = new Date();
            changeMonth(today.getMonth());
            changeYear(today.getFullYear());
          };

          return (
            <div className="custom-header">
              <button
                type="button"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="nav-arrow"
              >
                <FaChevronLeft />
              </button>

              <button className="home-button" onClick={changeToToday} type="button">
                <FaHome />
              </button>

              <div className="dropdowns">
                {/* Mois */}
                <div className="dropdown">
                  <span
                    className="dropdown-toggle"
                    onClick={() => setShowMonthDropdown((prev) => !prev)}
                  >
                    <span className="underlined">{months[date.getMonth()]}</span>
                    <FaChevronDown className="chevron" />
                  </span>
                  {showMonthDropdown && (
                    <ul className="dropdown-menu">
                      {months.map((month, index) => (
                        <li
                          key={month}
                          className={index === date.getMonth() ? "active" : ""}
                          onClick={() => {
                            changeMonth(index);
                            setShowMonthDropdown(false);
                          }}
                        >
                          {month}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Année */}
                <div className="dropdown">
                  <span
                    className="dropdown-toggle"
                    onClick={() => setShowYearDropdown((prev) => !prev)}
                  >
                    <span className="underlined">{date.getFullYear()}</span>
                    <FaChevronDown className="chevron" />
                  </span>
                  {showYearDropdown && (
                    <ul className="dropdown-menu">
                      {years.map((year) => (
                        <li
                          key={year}
                          className={year === date.getFullYear() ? "active" : ""}
                          onClick={() => {
                            changeYear(year);
                            setShowYearDropdown(false);
                          }}
                        >
                          {year}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="nav-arrow"
              >
                <FaChevronRight />
              </button>
            </div>
          );
        }}
      />
    </div>
  );
}