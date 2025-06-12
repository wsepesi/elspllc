'use client'

import { useEffect } from 'react'
import { Button } from '../src/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
      <h2 className="text-5xl font-normal mb-4 text-gray-shade font-libre">
        Something went wrong!
      </h2>
      <p className="text-lg font-light mb-6 text-gray">
        We apologize for the inconvenience. Please try again.
      </p>
      <Button onClick={reset} className="mt-2">
        Try again
      </Button>
    </div>
  )
}
