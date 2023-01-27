import { useEffect, useRef } from 'react'

import { Universe } from 'wasm'
import { Wasm } from './hooks/useWasm'

type Props = {
  universe: Universe
  wasm: Wasm
  fps?: number
}

const FPS = 45

const UniverseGame = ({ universe, fps = FPS }: Props) => {
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    requestAnimationFrame(renderLoop)
  }, [])

  const renderLoop = () => {
    preRef.current!.textContent = universe.render()

    setTimeout(() => {
      universe.tick()
      requestAnimationFrame(renderLoop)
    }, 1000 / fps)
  }

  return <pre ref={preRef}></pre>
}

export default UniverseGame
