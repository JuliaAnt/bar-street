import styles from './App.module.scss'
import { RoutesContent } from './components/RoutesContent/RoutesContent'

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <div className='routesContent'>
        <RoutesContent />
      </div>
    </div>
  )
}

export default App
