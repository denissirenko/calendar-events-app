import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentDay, selectCurrentDaySlice } from '../../features/selectedDay/selectedDaySlice';
import { selectEventsSlice } from '../../features/saveEvents/saveEvents';
import { setSelectedEvent } from '../../features/selectedEvent/selectedEvent';
import { open } from '../../features/modal/modalSlice';
import dayjs from 'dayjs';
import s from './Day.module.scss';

export const Day = ({ day }) => {
  const selectedDay = useSelector(selectCurrentDaySlice);
  const sevedEvents = useSelector(selectEventsSlice);
  const [dayEvents, setDayEvents] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const events = sevedEvents.filter((evt) => evt.day === day.format('DD-MM-YY'));
    setDayEvents(events);
  }, [sevedEvents, day]);

  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'current-day' : '';
  }

  function getSelectedDayClass(day) {
    return day.format('DD-MM-YY') === selectedDay ? 'selected-day' : '';
  }

  return (
    <div
      onClick={() => dispatch(setCurrentDay(day.format('DD-MM-YY')))}
      className={`${getCurrentDayClass()} ${getSelectedDayClass(day)} ${s['day-wrap']}`}>
      <div className={s['day-info']}>
        <div className={s.date}>{day.format('DD')}</div>
        <div className={s['day-week']}>{day.format('dd')}</div>
      </div>
      {dayEvents.map((event, idx) => (
        <div
          key={idx}
          onClick={() => {
            dispatch(setSelectedEvent(event));
            dispatch(open());
          }}
          className={s.eventItem}>
          {event.title}
        </div>
      ))}
    </div>
  );
};
