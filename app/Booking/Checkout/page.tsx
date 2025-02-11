"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function ThankYouPage() {
	const router = useRouter()

	const handleBackToHome = () => {
		router.push("/") // Redirection vers la page d'accueil
	}

	const handleViewAppointments = () => {
		router.push("/dashboard/account") // Redirection vers les rendez-vous
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
			<motion.div
				className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

				<h1 className="text-2xl font-bold mb-2">Merci pour votre réservation ! 🎉</h1>
				<p className="text-gray-600 mb-6">
					Votre rendez-vous a été confirmé avec succès. Vous recevrez un email de confirmation sous peu.
				</p>

				<div className="flex justify-center gap-4">
					<Button onClick={handleBackToHome} variant="outline">
						Retour à l'accueil
					</Button>
					<Button onClick={handleViewAppointments}>Voir mes rendez-vous</Button>
				</div>
			</motion.div>
		</div>
	)
}
