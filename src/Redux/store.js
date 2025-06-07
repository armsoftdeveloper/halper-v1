import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../Components/Navbar/navbarSlice';
import mainReducer from '../Components/Main/mainSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    main: mainReducer,
  },
});
