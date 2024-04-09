import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'

function App() {


  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={'Сверстать 404'} />
    </Routes>
  )
}

export default App
