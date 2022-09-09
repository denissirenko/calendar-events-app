import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header } from './componets/Header/Header';
import { Calendar } from './componets/Calendar/Calendar';
import { selectMonth } from './features/month/monthSlice';
import { selectModal } from './features/modal/modalSlice';
import s from './App.module.scss';

import { getMonth } from './util';
import { EventModal } from './componets/EventModal/EventModal';

function App() {
  const [currentMonth, setcurrentMonth] = useState(getMonth());
  const month = useSelector(selectMonth);
  const modal = useSelector(selectModal);

  useEffect(() => {
    setcurrentMonth(getMonth(month));
  }, [month]);
  return (
    <>
      {modal && <EventModal />}

      <div className={s.app}>
        <Header />
        <Calendar month={currentMonth} />
      </div>
    </>
  );
}

export default App;
