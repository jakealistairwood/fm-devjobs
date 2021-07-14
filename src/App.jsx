import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import './App.scss'
import styled, { ThemeProvider } from 'styled-components'
import { lightMode, darkMode, GlobalStyles } from './theme'

const App = () => {

  const [ isToggled, setIsToggled ] = useState(false)
  const [theme, setTheme ] = useState('light')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode }>
      <GlobalStyles />
      <div>
          <Navbar 
            isToggled={isToggled}
            toggleTheme={toggleTheme}
            onToggle={() => setIsToggled(!isToggled)} 
          />
          {/* Job Listings */}
          <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
