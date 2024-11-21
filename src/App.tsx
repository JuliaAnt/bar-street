import './App.scss'
import { RoutesContent } from './components/RoutesContent/RoutesContent'

function App(): JSX.Element {
  return (
    <div className='app'>
      <div className='routesContent'>
        <RoutesContent />
      </div>
    </div>
  )
}

export default App
