import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">NelsonBot</h1>
          <p className="text-sm text-gray-600">Your Pediatric Knowledge Companion</p>
        </div>
        <div>
          <Button variant="outline" className="mr-2">Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

