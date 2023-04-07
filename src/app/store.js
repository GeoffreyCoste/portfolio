import {
  configureStore
} from '@reduxjs/toolkit';
import themeReducer from '../features/theme';
import deviceReducer from '../features/device';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    device: deviceReducer,
  },
});