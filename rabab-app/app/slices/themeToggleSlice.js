import { createSlice } from '@reduxjs/toolkit'

export const ThemeToggleSlice = createSlice({
    name: 'themeToggle',
    initialState: {
        value: 'dark',
    },
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value == 'light' ? 'dark' : 'light'
        },
    },
})

export const { toggleTheme } = ThemeToggleSlice.actions
export default ThemeToggleSlice.reducer
