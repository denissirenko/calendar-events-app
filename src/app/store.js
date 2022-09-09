import monthReducer from '../features/month/monthSlice';
import mondalReducer from '../features/modal/modalSlice';
import currentDayReducer from '../features/selectedDay/selectedDaySlice';
import saveEventsReducer from '../features/saveEvents/saveEvents';
import selectedEventReducer from '../features/selectedEvent/selectedEvent';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  month: monthReducer,
  modal: mondalReducer,
  selectedDay: currentDayReducer,
  events: saveEventsReducer,
  selectedEvent: selectedEventReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['events', 'selectedEvent'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
