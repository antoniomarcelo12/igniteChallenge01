import { Content } from './components/Content'
import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'

function App() {

  return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Content />
        </div>

      </div>
  )
}

export default App
