import { useState } from 'react'
import useWasm from './hooks/useWasm'

import './App.css'

function App() {
  const wasm = useWasm()
  const [val, setValue] = useState('')

  if (!wasm) {
    return 'LOADING'
  }

  return (
    <div>
      <h1>rust monorepo wasm demo</h1>
      <label htmlFor="name">Your name?</label>
      <input
        value={val}
        onChange={event => setValue(event.target.value)}
        id="name"
      />
      <h2>Greeting from wasm: {!wasm ? 'Loading...' : wasm.greet(val)}</h2>
    </div>
  )
}

export default App
