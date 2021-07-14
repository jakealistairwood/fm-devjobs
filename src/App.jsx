import Navbar from './components/Navbar'
import Home from './containers/Home'
import './App.scss'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Job Listings */}
      <Home />
    </div>
  )
}

export default App
