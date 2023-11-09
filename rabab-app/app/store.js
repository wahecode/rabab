import { configureStore } from '@reduxjs/toolkit';
import ThemeToggleSlice from './slices/themeToggleSlice';

export const store = configureStore({
    reducer: {
        theme: ThemeToggleSlice
    }
})