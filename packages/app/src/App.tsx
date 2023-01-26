import useWasm from './hooks/useWasm'
import UniverseGame from './UniverseGame'

import './App.css'

function App() {
  const wasm = useWasm()

  if (!wasm) {
    return 'LOADING'
  }

  return (
    <div>
      <h1>Rust wasm in monorepo - Game of life</h1>
      <UniverseGame universe={wasm.Universe.new()} wasm={wasm} />
    </div>
  )
}

export default App
