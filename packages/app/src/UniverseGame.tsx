import { useEffect, useRef } from 'react'
import { Universe } from 'wasm'
import { Wasm } from './hooks/useWasm'

type Props = {
  universe: Universe
  wasm: Wasm
}

const UniverseGame = ({ universe }: Props) => {
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    window.requestAnimationFrame(renderLoop)
  }, [])

  const renderLoop = () => {
    preRef.current!.textContent = universe.render()

    universe.tick()

    requestAnimationFrame(renderLoop)
  }

  return <pre ref={preRef}></pre>
}

export default UniverseGame
