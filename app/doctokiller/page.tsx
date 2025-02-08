import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"
// import { User } from "lucide-react"
import { Footer } from "@/components/Footer"
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  CreditCard,
  User,
  Calendar,
} from "lucide-react"

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
        <Card className="flex flex-row">
          <CardContent className="flex flex-row">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&showPrint=0&showTz=0&showCalendars=0&showTabs=0&mode=WEEK&src=ZHJqb2huc29uc2FyYWhAZ21haWwuY29t&color=%23039BE5" style={{ borderWidth: "0" }} width="800" height="600" frameborder="0" scrolling="no"></iframe>
          </CardContent>

          <CardContent className="flex flex-col p-6">
            <Link href="https://calendly.com/drjohnsonsarah/20min">
              <Button className="w-full mb-4" size="lg">
                <Calendar className="mr-2 h-4 w-4" />
                Prendre rendez-vous
              </Button>
            </Link>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <p className="font-medium">Horaires d'ouverture</p>
                  <p className="text-sm text-gray-600">Lun-Mar-Jeu-Ven: 9h00 - 18h00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-sm text-gray-600">5 Place Gambetta,</p>
                  <p className="text-sm text-gray-600">33340 Lesparre-Médoc</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CreditCard className="h-5 w-5 text-gray-500 mt-1" />
                <div>
                  <p className="font-medium">Moyens de paiement</p>
                  <p className="text-sm text-gray-600">Chèques, espèces, carte bancaire</p>
                </div>
              </div>
              <h3 className="font-medium mb-4 mt-10 ">Informations de contact</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="mr-2 h-4 w-4" />
                  05 57 81 28 51
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="mr-2 h-4 w-4" />
                  drjohnsonsarah@gmail.com
                </Button>
              </div>
            </div>
          </CardContent>

          {/* <CardContent className="flex flex-col" >
            <h3 className="font-medium mb-4">Informations de contact</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Phone className="mr-2 h-4 w-4" />
                05 57 81 28 51
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                drjohnsonsarah@gmail.com
              </Button>
            </div>
          </CardContent> */}
        </Card>
      </main>
    </div>
  )
}

