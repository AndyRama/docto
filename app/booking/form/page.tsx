"use client"

import Image from "next/image"
import Navigation from "@/components/Navigation"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function AppointmentBooking() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const availableDates = [
    {
      date: "Lundi 10 février",
      times: ["09:15"],
    },
    {
      date: "Mardi 11 février",
      times: ["09:45", "10:00", "10:15", "14:15", "14:30", "14:45"],
    },
    {
      date: "Mercredi 12 février",
      times: [
        "09:15",
        "09:30",
        "09:45",
        "10:15",
        "10:30",
        "10:45",
        "11:00",
        "14:00",
        "14:15",
        "14:30",
        "14:45",
        "15:00",
        "15:30",
        "15:45",
        "16:00",
        "16:15",
        "16:30",
        "16:45",
      ],
    },
    {
      date: "Jeudi 13 février",
      times: [
        "09:15",
        "09:30",
        "09:45",
        "10:15",
        "10:30",
        "10:45",
        "11:00",
        "14:00",
        "14:15",
        "14:30",
        "14:45",
        "15:00",
        "15:30",
        "15:45",
        "16:00",
        "16:15",
        "16:30",
        "16:45",
      ],
    },
    {
      date: "Vendredi 14 février",
      times: [
        "09:15",
        "09:30",
        "09:45",
        "10:15",
        "10:30",
        "10:45",
        "11:00",
        "14:00",
        "14:15",
        "14:30",
        "14:45",
        "15:00",
        "15:30",
        "15:45",
        "16:00",
        "16:15",
        "16:30",
        "16:45",
      ],
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time)
    // Add a small delay before navigation to show the selection state
    setTimeout(() => {
      router.push("/booking/checkout")
    }, 300)
  }

  return (
    <>
     <Navigation />
      {/* Profile Section */}
      <motion.div
        className="bg-[#2C4A3E] text-white py-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex items-center gap-6">
          <div className="rounded-lg overflow-hidden w-24 h-24 bg-white">
            <Image src="./placeholder.jpg" alt="Profile" width={96} height={96} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Dr Ramaroson Lucienne</h1>
            <p className="text-gray-200">Médecin généraliste</p>
          </div>
        </div>
      </motion.div>
   
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Prenez votre rendez-vous en ligne</h1>
        <p className="text-muted-foreground">Renseignez les informations suivantes</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-6">
        <div>
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => {
              setSelectedDate(null)
              setSelectedTime(null)
            }}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Étape précédente
          </Button>

          <div className="space-y-4">
            {availableDates.map((day) => (
              <Collapsible
                key={day.date}
                open={selectedDate === day.date}
                onOpenChange={() => setSelectedDate(day.date)}
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4 hover:bg-accent">
                  <span>{day.date}</span>
                  <ChevronRight className="h-5 w-5 transition-transform duration-200 [&[data-state=open]]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4">
                  <div className="grid grid-cols-4 gap-2">
                    {day.times.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "secondary"}
                        className="w-full"
                        onClick={() => handleTimeSelection(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="" />
                <AvatarFallback>
                  <User className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">Dr François CAMPAGNE</CardTitle>
                <p className="text-sm text-muted-foreground">Médecin généraliste</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Votre rendez-vous en détail</h3>
                <div className="space-y-2 text-sm">
                  <p>26 ROUTE DE MONTALIVET, 33930 VENDAYS</p>
                  <p>patients habituels - Consultation MG</p>
                </div>
              </div>
              {selectedDate && selectedTime && (
                <div className="rounded-lg bg-accent p-4">
                  <p className="font-medium">{selectedDate}</p>
                  <p className="text-muted-foreground">{selectedTime}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  )
}