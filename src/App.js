import React, { useState } from 'react'

import { Home } from './views/Home'

function App() {
  const [colorScheme, setColorScheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ ...themes, colorScheme: colorScheme }}>
      <Home setColorScheme={setColorScheme} />
    </ThemeContext.Provider>
  )
}

export default App

// Themeing
const themes = {
  colorScheme: 'light',
  light: {
    button: {
      primaryBackground: '#2F73DA',
      primaryBackgroundDisabled: '#EEF1F6',
      primaryBackgroundHover: '#165ECC',
      primaryText: '#FFFFFF',
      primaryTextDisabled: '#A8B1BD',
      neutralBackground: '#FFFFFF',
      neutralBackgroundHover: '#165ECC',
      neutralBackgroundDisabled: '#FFFFFF',
      neutralText: '#2F73DA',
      neutralTextDisabled: '#6A7381',
      neutralTextHover: '#165ECC',
    },
    container: '#FFFFFF',
    text: '#121417',
  },
  dark: {
    button: {
      primaryBackground: '#2F73DA',
      primaryBackgroundDisabled: '#49505A',
      primaryBackgroundHover: '#165ECC',
      primaryText: '#FFFFFF',
      primaryTextDisabled: '#A8B1BD',
      neutralBackground: '#1F2329',
      neutralBackgroundHover: '#6A7381',
      neutralBackgroundDisabled: '#49505A',
      neutralText: '#FFFFFF',
      neutralTextDisabled: '#A8B1BD',
      neutralTextHover: '#FFFFFF',
    },
    container: '#1F2329',
    text: '#FFFFFF',
  },
  spacing: {
    large: '24px',
    medium: '16px',
    small: '12px',
  },
}

export const ThemeContext = React.createContext(themes)
