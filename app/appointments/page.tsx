"use client"

import Image from "next/image"
import Navigation from "@/components/Navigation"
import { motion } from "framer-motion"
import { ChevronLeft, User } from "lucide-react"
import { useRouter } from "next/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function AppointmentBooking() {
	const router = useRouter()

	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	}

	// ✅ Fonction de gestion de la sélection
	const handleSelection = (value: string) => {
		console.log("Motif sélectionné :", value)
		router.push("/appointments/initial") // 🚀 Redirection après sélection
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
					<h1 className="text-xl font-semibold mb-4">Prenez votre rendez-vous en ligne</h1>
					<p className="text-muted-foreground mb-8">Renseignez les informations suivantes</p>

					<div className="grid lg:grid-cols-[1fr,400px] gap-8">
						<div className="space-y-6">
							<Button variant="ghost" className="gap-2">
								<ChevronLeft className="w-4 h-4" />
								Étape précédente
							</Button>

							<div>
								<h2 className="text-lg font-medium mb-4">Choisissez votre motif de consultation</h2>
								
								{/* ✅ Gestion de la sélection avec onValueChange */}
								<RadioGroup defaultValue="" className="space-y-2" onValueChange={handleSelection}>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="consultation-mg" id="consultation-mg" />
										<Label htmlFor="consultation-mg">Patients habituels - Consultation MG</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="nouveau-patient" id="nouveau-patient" />
										<Label htmlFor="nouveau-patient">Nouveau patient - Première consultation</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="urgence" id="urgence" />
										<Label htmlFor="urgence">Consultation urgente</Label>
									</div>
								</RadioGroup>
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
										<CardTitle className="text-base">Dr Lucienne Ramaroson</CardTitle>
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
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	)
}
