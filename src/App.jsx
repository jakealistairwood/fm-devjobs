import { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import JobDetails from './containers/JobDetails'
import './App.scss'
import { ThemeProvider } from 'styled-components'
import { lightMode, darkMode, GlobalStyles } from './theme'

const App = () => {

  const [ isToggled, setIsToggled ] = useState(false)
  const [theme, setTheme ] = useState('light')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightMode : darkMode }>
        <GlobalStyles />
        <div>
            <Navbar 
              isToggled={isToggled}
              toggleTheme={toggleTheme}
              onToggle={() => setIsToggled(!isToggled)} 
            />
            {/* Job Listings */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/job-listings/:id" render={(props) => (
                <JobDetails {...props} />
              )} />
            </Switch>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
