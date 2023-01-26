import { useEffect, useState } from 'react'

export type Wasm = typeof import('wasm')

const useWasm = () => {
  const [wasm, setWasm] = useState<Wasm>()

  useEffect(() => {
    ;(async () => {
      try {
        const wasm = await import('wasm')

        setWasm(wasm)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return wasm
}

export default useWasm
