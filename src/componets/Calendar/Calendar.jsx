import React from 'react';
import { Day } from '../Day/Day';
import s from './Calendar.module.scss';

export const Calendar = ({ month }) => {
  return (
    <div className={s['calendar-wpar']}>
      <div className={s.calendar}>
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day key={idx} day={day} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
