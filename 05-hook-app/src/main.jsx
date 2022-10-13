import React from 'react'
import ReactDOM from 'react-dom/client'
import { CallbackHook } from './06-memos/CallbackHook'
import { MemoHook } from './06-memos/MemoHook'
import { Padre } from './07-tarea-memo/Padre'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memos/Memoriza'
//import { SimpleForm } from './02-useEffect/SimpleForm'
import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Padre/>
  </React.StrictMode>
)
