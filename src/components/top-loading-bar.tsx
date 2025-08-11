import { useRouter } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export default function TopLoadingBar() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
      setProgress(10)
    }

    const handleComplete = () => {
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
      }, 200)
    }

    // Listen to router navigation events
    const unsubscribe = router.subscribe('onBeforeLoad', handleStart)
    const unsubscribe2 = router.subscribe('onLoad', handleComplete)

    // Simulate progress during loading
    let progressInterval: NodeJS.Timeout
    if (isLoading && progress < 90) {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) {
            return prev + Math.random() * 10
          }
          return prev
        })
      }, 80)
    }

    return () => {
      unsubscribe()
      unsubscribe2()
      if (progressInterval) {
        clearInterval(progressInterval)
      }
    }
  }, [router, isLoading, progress])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
        style={{
          width: `${Math.min(progress, 100)}%`,
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
        }}
      />
    </div>
  )
}
