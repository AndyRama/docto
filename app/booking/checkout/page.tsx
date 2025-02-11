"use client";

import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <Image
            src="/placeholder.jpg"
            alt="Profile"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold">Dr Ramaroson Lucienne</h1>
          <p className="text-gray-200">Médecin généraliste</p>
        </div>
      </motion.div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">

      {/* Message de confirmation */}
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center mt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

        <h1 className="text-2xl font-bold mb-2">
          Merci pour votre réservation ! 🎉
        </h1>
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
  </>
  );
}
