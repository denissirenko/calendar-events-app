import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { close } from '../../features/modal/modalSlice';
import { selectCurrentDaySlice } from '../../features/selectedDay/selectedDaySlice';
import { add, update, remove } from '../../features/saveEvents/saveEvents';
import {
  setSelectedEvent,
  selectSelectedEventSlice,
} from '../../features/selectedEvent/selectedEvent';
import { MdClose, MdReplay, MdDeleteSweep, MdOutlineWatchLater } from 'react-icons/md';

import dayjs from 'dayjs';

import s from './EventModal.module.scss';

export const EventModal = () => {
  const selectedDay = useSelector(selectCurrentDaySlice);
  const selectedEvent = useSelector(selectSelectedEventSlice);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
  const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : '');

  const dispatch = useDispatch();

  const createdEventTime = dayjs().format('HH-mm');

  function handleSubmit(e) {
    e.preventDefault();
    const Event = {
      title,
      description,
      day: selectedDay,
      time: createdEventTime,
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatch(update(Event));
    } else {
      dispatch(add(Event));
    }

    dispatch(close());
  }

  return (
    <div className={s['modal-wrap']}>
      <form className={s.modal}>
        <div className={s['modal-header']}>
          {selectedEvent ? (
            <div className={s['modal-title-block']}>
              <div className={s['modal-title']}>Edit idea item</div>
              <div className={s['modal-subtitle']}>
                Created at: {selectedEvent.day} {selectedEvent.time}
              </div>
            </div>
          ) : (
            <div className={s['modal-title']}>Add Evets</div>
          )}

          <button
            onClick={() => {
              dispatch(setSelectedEvent(null));
              dispatch(close());
            }}
            className={s['modal-close']}>
            <MdClose />
          </button>
        </div>
        <div className={s['modal-body']}>
          <div className={s['input-wrap']}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="title"
              required
            />
            {selectedEvent ? <MdReplay /> : null}
          </div>
          <div className={s['textarea-wrap']}>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
            {selectedEvent ? <MdReplay /> : null}
          </div>
          <div className={s['date-info']}>
            <div className={s.date}>
              <span>Date:</span>
              <span>{selectedEvent ? selectedEvent.day : selectedDay}</span>
            </div>
            <div className={s.time}>
              <span>Time: </span>
              <span>
                {selectedEvent ? selectedEvent.time : createdEventTime} <MdOutlineWatchLater />
              </span>
            </div>
          </div>
        </div>
        <div className={s['btn-wrap']}>
          {selectedEvent && (
            <button
              onClick={() => {
                dispatch(remove(selectedEvent));
                dispatch(close());
              }}
              className={s['delete-btn']}>
              <MdDeleteSweep />
            </button>
          )}
          <button type="submit" onClick={handleSubmit} className={s['save-btn']}>
            save
          </button>
        </div>
      </form>
    </div>
  );
};
