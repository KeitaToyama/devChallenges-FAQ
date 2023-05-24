import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import womanonline from '/illustration-woman-online-desktop.svg'
import box from '/illustration-box-desktop.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen bg-gradient-to-b from-purple-500 to-indigo-500 grid place-content-center max-w-full'>
<div className='bg-slate-50 rounded-2xl grid md:inline-flex lg:w-[970px] md:w-[770px] w-[340px]'>
  <div className='basis-1/2 grow flex flex-col'>
    <div id='rightbg' className='h-[105px] md:h-[625px] relative'><img className='absolute' src={womanonline}/>
      <img src={box} className="absolute"/>
      
      </div></div>
  </div>
  <div className='basis-1/2 grow'>
    
</div>
      
    </div>
    </>
  )
}

export default App
