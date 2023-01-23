import { useEffect, useState } from 'react'

const useWasm = () => {
  const [wasm, setWasm] = useState<typeof import('wasm')>()

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
