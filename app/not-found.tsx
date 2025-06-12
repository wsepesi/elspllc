import Link from 'next/link'
import { Button } from '../src/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
      <h1 className="text-6xl font-normal mb-4 text-gray-shade font-libre">
        404
      </h1>
      <h4 className="text-4xl font-medium mb-4 text-gray-shade font-libre">
        Page Not Found
      </h4>
      <p className="text-lg font-light mb-6 text-gray">
        The page you are looking for does not exist.
      </p>
      <Button asChild className="mt-2">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
