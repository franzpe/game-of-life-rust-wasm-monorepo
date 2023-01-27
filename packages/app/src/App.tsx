import useWasm from './hooks/useWasm'
import UniverseGame from './game/UniverseGame'

import './App.css'

function App() {
  const wasm = useWasm()

  if (!wasm) {
    return 'LOADING'
  }

  return (
    <div>
      <h1>John Conway's Game of life</h1>
      <UniverseGame universe={wasm.Universe.new(64, 32)} wasm={wasm} fps={20} />
      <footer>
        By <a href="https://github.com/franzpe">Frank Pobocek</a> @ WASM, Rust,
        React, Monorepo
      </footer>
    </div>
  )
}

export default App
