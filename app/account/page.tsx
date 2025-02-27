import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User } from "lucide-react"

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#4BB484] text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Cabinet Médical
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/help" className="text-sm hover:underline flex items-center gap-1">
              <User className="h-4 w-4 hidden md:contents" />
              En cas d'urgence
            </Link>
            <Button variant="secondary" size="sm" className="font-bold">
              Contacter le 15
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-[1200px]">
        <h1 className="text-3xl font-bold mb-6">Calendrier des rendez-vous</h1>

      </main>
    </div>
  )
}

