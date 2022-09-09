import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMonth, increment, decrement } from '../../features/month/monthSlice';
import { open } from '../../features/modal/modalSlice';
import { setSelectedEvent } from '../../features/selectedEvent/selectedEvent';
import { MdChevronLeft, MdChevronRight, MdAdd } from 'react-icons/md';
import dayjs from 'dayjs';

import s from './Header.module.scss';

export const Header = () => {
  const month = useSelector(selectMonth);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <button
        onClick={() => {
          dispatch(setSelectedEvent(null));
          dispatch(open());
        }}
        className={s['add-events']}>
        <MdAdd />
      </button>
      <div className={s.calendar}>
        <button className={s['set-month-btn']} onClick={() => dispatch(decrement())}>
          <MdChevronLeft />
        </button>
        <span className={s.month}>
          {dayjs(new Date(dayjs().year(), month)).format('MMMM YYYY')}
        </span>
        <button className={s['set-month-btn']} onClick={() => dispatch(increment())}>
          <MdChevronRight />
        </button>
        {/* <button className={s['calendar-btn']}>
          <MdDateRange />
        </button> */}
      </div>
    </header>
  );
};
