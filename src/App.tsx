import './App.css'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen flex justify-center items-center bg-whiteBgMain dark:bg-darkBgMain">
        <button
          className="bg-whiteButtonMain dark:bg-darkButtonMain p-2 rounded text-darkTextMain"
          onClick={() => {
            setDarkMode(!darkMode)
          }}
        >
          {t('title')}
        </button>
      </div>
    </div>
  )
}

export default App
