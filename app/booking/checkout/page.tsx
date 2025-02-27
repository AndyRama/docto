"use client";

import { Check, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ThankYouPage() {
	const router = useRouter();

	const handleBackToHome = () => {
		router.push("/"); // Redirection vers la page d'accueil
	};

	const handleViewAppointments = () => {
		router.push("/dashboard/account"); // Redirection vers les rendez-vous
	};

	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

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
						<Image src="./../placeholder.jpg" alt="Profile" width={96} height={96} className="w-full h-full object-cover" />
					</div>
					<div>
						<h1 className="text-2xl font-bold">Dr Ramaroson Lucienne</h1>
						<p className="text-gray-200">Médecin généraliste</p>
					</div>
				</div>
			</motion.div>

			<div className="mt-20 flex flex-col items-center justify-center bg-white px-4 border border-black rounded-md w-[400px] mx-auto">
				<div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
					<Card className="w-full max-w-2xl">
						<CardHeader className="flex flex-col items-center space-y-6 pb-0">
							<div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
								<Check className="h-6 w-6 text-green-600" />
							</div>
							<div className="text-center space-y-2">
								<h1 className="text-2xl font-bold">Le rendez-vous est planifié</h1>
								<p className="text-gray-600">
									Nous avons envoyé un e-mail avec une invitation calendrier contenant tous les détails aux participants.
								</p>
							</div>
						</CardHeader>
						<CardContent className="pt-6 space-y-4">
							<div className="grid grid-cols-[100px_1fr] gap-4">
								<div className="font-medium text-gray-700">Quoi</div>
								<div>
									<p>Consultation Cabinet Merignac (20 Min)</p>
									<p className="text-gray-600">entre Dr Sarah Johnson et ANDY ramaroson</p>
								</div>
							</div>

							<div className="grid grid-cols-[100px_1fr] gap-4">
								<div className="font-medium text-gray-700">Quand</div>
								<div>
									<p>vendredi 28 février 2025</p>
									<p className="text-gray-600">10:00 - 10:20 (heure normale d&apos;Europe centrale)</p>
								</div>
							</div>

							<div className="grid grid-cols-[100px_1fr] gap-4">
								<div className="font-medium text-gray-700">Qui</div>
								<div className="space-y-2">
									<div>
										<p>
											Dr Sarah Johnson <span className="text-blue-600 text-sm ml-2">Host</span>
										</p>
										<p className="text-gray-600">drjohnsonsarah@gmail.com</p>
									</div>
									<div>
										<p>ANDY ramaroson</p>
										<p className="text-gray-600">andyramaroson@gmail.com</p>
									</div>
								</div>
							</div>

							<div className="grid grid-cols-[100px_1fr] gap-4">
								<div className="font-medium text-gray-700">Où</div>
								<div>
									<p>Adresse 5 Place Gambetta, 33340 Lesparre-Médoc</p>
								</div>
							</div>

							<div className="grid grid-cols-[100px_1fr] gap-4">
								<div className="font-medium text-gray-700">Téléphone</div>
								<div>
									<p>+33630832875</p>
								</div>
							</div>
						</CardContent>

						<Separator />

						<CardFooter className="flex flex-col space-y-6 pt-6">
							<div className="text-center w-full">
								<p className="mb-2">Besoin de faire un changement ?</p>
								<div className="flex justify-center gap-4">
									<Button variant="link" className="text-blue-600">
										Replanifier
									</Button>
									<span className="text-gray-500">ou</span>
									<Button variant="link" className="text-blue-600">
										Annuler
									</Button>
								</div>
							</div>

							<div className="flex items-center justify-center w-full gap-2">
								<Button variant="outline" className="flex items-center gap-2">
									<Calendar className="h-4 w-4" />
									Ajouter au calendrier
								</Button>
								<Button variant="outline" size="icon" className="rounded-md">
									<img src="/placeholder.svg?height=20&width=20" alt="Google Calendar" className="h-5 w-5" />
								</Button>
								<Button variant="outline" size="icon" className="rounded-md">
									<img src="/placeholder.svg?height=20&width=20" alt="Outlook" className="h-5 w-5" />
								</Button>
								<Button variant="outline" size="icon" className="rounded-md">
									<img src="/placeholder.svg?height=20&width=20" alt="Apple Calendar" className="h-5 w-5" />
								</Button>
							</div>
						</CardFooter>
					</Card>
				</div>
			</div>
		</>
	);
}
