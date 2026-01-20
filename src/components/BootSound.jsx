import { useEffect } from "react"
import { useSound } from "../context/SoundContext"

export default function BootSound() {
  const { playBoot } = useSound()

  useEffect(() => {
    playBoot()
  }, [])

  return null
}
