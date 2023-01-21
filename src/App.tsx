import 'normalize.css'
import './index.css'
import 'antd/dist/reset.css';
import { useState } from 'react'
import { DashboardPage } from './pages/Dashboard'
import { Background } from './components/Background'

function App() {

  return (
    <Background>
      <DashboardPage />
    </Background>
  )
}

export default App
