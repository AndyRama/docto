import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  CreditCard,
  Calendar,
  ChevronDown,
  User,
  ShipWheelIcon as Wheelchair,
  Car,
  Globe,
  House,
  Smartphone,
  Stethoscope,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import Navigation from "./components/Navigation"
import { Footer } from "./components/Footer"
import FooterBottom from "./components/FooterBottom"
import IconGoogle from "./public/googleCalendar.png"
import IconCalendly from "./public/calendly.png"

export default function LandingPage() {

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
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

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 max-w-[1200px]">
          <div className="grid md:grid-cols-[1fr_300px] gap-8">
            <div className="space-y-6">
              {/* Tabs */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="overview">Aperçu</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="location">Localisation</TabsTrigger>
                    <TabsTrigger value="schedule">Horaires</TabsTrigger>
                    <TabsTrigger value="faq">F.A.Q</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">Présentation et langues parlées</h2>
                          <p className="text-gray-600">
                            Le médecin généraliste accueille les enfants et les adultes pour tous types de soins médicaux
                            généraux (consultation, contrôle annuel, vaccination, bilan de santé). Il assure également un
                            suivi des patients dans le temps et les oriente vers des médecins spécialistes en cas de besoin.
                          </p>
                          <div className="flex items-center gap-2 mt-4">
                            <Globe className="h-5 w-5 text-gray-400" />
                            <h3 className="font-medium">Langues parlées</h3>
                          </div>
                          <p className="text-gray-600 mt-2">Anglais, Français</p>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">Horaires et coordonnées</h2>
                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <h3 className="font-medium mb-2">Horaires d'ouverture</h3>
                              <p className="text-gray-600">Lun-Ven : 09h00 - 12h00, 14h00 - 18h00</p>
                            </div>
                            <div>
                              <h3 className="font-medium mb-2">Contact d'urgence</h3>
                              <p className="text-gray-600">En cas d'urgence, <span className="font-bold">contactez le 15 (Samu)</span></p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h3 className="font-medium mb-2">Coordonnées</h3>
                            <div className="flex flex-rows">
                              <span><Smartphone className="h-5 w-5 text-gray-400 mr-4" /></span>
                              <p className="text-gray-600">05 57 81 28 51</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">Carte et informations d'accès</h2>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>

                              <h3 className="font-medium mb-2">Adresse</h3>
                              <div className="flex flex-rows">
                                <span><House className="h-5 w-5 text-gray-400 mr-3" /></span>
                                <p className="text-gray-600 mb-4">5 Place Gambetta, 33340 Lesparre-Médoc</p>
                              </div>
                              <h3 className="font-medium mb-2">Informations pratiques</h3>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center gap-2">
                                  <MapPin className="h-5 w-5 text-gray-400" />
                                  Entrée accessible
                                </li>
                                <li className="flex items-center gap-2">
                                  <Car className="h-5 w-5 text-gray-400" />
                                  Parking gratuit
                                </li>
                              </ul>
                              <div className="bg-gray-200 rounded-lg overflow-hidden h-48 mt-12 ">
                                <Image
                                  src="/test.webp"
                                  alt="image cabinet"
                                  width={200}
                                  height={300}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            <div className="bg-gray-200 rounded-lg overflow-hidden h-48 md:h-full">
                              <iframe
                                title="Google Maps"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBwOWZ_C1sw6lYJhxYk_LJJCI2uM9GW8IA&q=5 Place Gambetta, 33340 Lesparre-Médoc,france`}
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                // allowFullScreen=""
                                loading="lazy"
                              ></iframe>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">FAQ</h2>
                          <div className="space-y-4">
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Quelle est votre politique d'annulation ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                Les annulations doivent être effectuées au moins 24 heures à l'avance pour éviter des frais. Passé ce délai, des frais d'annulation pourront être appliqués.
                              </p>
                            </details>
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Proposez-vous des consultations virtuelles ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                Non, nous ne proposons pas encore de consultations virtuelles. Cependant, cela pourrait évoluer à l'avenir. Restez informé en consultant régulièrement notre site ou en nous contactant.
                              </p>
                            </details>
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Quelle est l'adresse du Dr Sarah Johnson ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                L'adresse du Dr Sarah Johnson est : [Insérez ici l'adresse exacte]. Veuillez vérifier les horaires avant de vous déplacer.
                              </p>
                            </details>
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Quelle est les moyens de paiement acceptés par le Dr Sarah Johnson ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                Le Dr Sarah Johnson accepte les paiements en espèces, par carte bancaire, ainsi que les chèques. Pour toute autre option, merci de contacter le cabinet.
                              </p>
                            </details>
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Est-ce que Dr Sarah Johnson accepte la carte Vitale ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                Oui, le Dr Sarah Johnson accepte la carte Vitale. Assurez-vous de l'avoir avec vous lors de votre consultation.
                              </p>
                            </details>
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Est-ce que Dr Sarah Johnson accepte les nouveaux patients ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                Oui, le Dr Sarah Johnson accepte de nouveaux patients. Pour prendre rendez-vous, veuillez nous contacter directement ou utiliser notre système de réservation en ligne.
                              </p>
                            </details>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.9 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">Informations légales</h2>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span>Numéro RPPS</span>
                              <span className="font-semibold">10109953223</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span>Numéro ADELI</span>
                              <span className="font-semibold">331118729</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="services" className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">Tarifs et remboursement</h2>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span>Conventionné secteur 1</span>
                              <span className="font-semibold">Oui</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span>Carte Vitale acceptée</span>
                              <span className="font-semibold">Oui</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span>Tiers payant : Sécurité sociale</span>
                              <span className="font-semibold">Oui</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h3 className="font-medium mb-2">Moyens de paiement</h3>
                            <p className="text-gray-600">Chèques, espèces et carte bancaire</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">Informations légales</h2>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span>Numéro RPPS</span>
                              <span className="font-semibold">10109953223</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b">
                              <span>Numéro ADELI</span>
                              <span className="font-semibold">331118729</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  {/* TabContent Localisation */}
                  <TabsContent value="location" className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">Carte et informations d'accès</h2>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-medium mb-2">Adresse</h3>
                              <p className="text-gray-600 mb-4">5 Place Gambetta, 33340 Lesparre-Médoc</p>

                              <h3 className="font-medium mb-2">Informations pratiques</h3>
                              <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center gap-2">
                                  <Wheelchair className="h-5 w-5 text-gray-400" />
                                  Entrée accessible
                                </li>
                                <li className="flex items-center gap-2">
                                  <Car className="h-5 w-5 text-gray-400" />
                                  Parking gratuit
                                </li>
                              </ul>
                              <div className="bg-gray-200 rounded-lg overflow-hidden h-48 mt-12 ">
                                <Image
                                  src="/test.webp"
                                  alt="Map"
                                  width={200}
                                  height={300}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            <div className="bg-gray-200 rounded-lg overflow-hidden h-48 md:h-full">
                              <iframe
                                title="Google Maps"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBwOWZ_C1sw6lYJhxYk_LJJCI2uM9GW8IA&q=5 Place Gambetta, 33340 Lesparre-Médoc,france`}
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                // allowFullScreen=""
                                loading="lazy"
                              ></iframe>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="schedule" className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">Horaires et coordonnées</h2>
                          <div className="grid gap-6 md:grid-cols-2 justify-between">
                            <div>
                              <h3 className="font-medium mb-2">Horaires d'ouverture</h3>
                              <p className="text-gray-600">Lun: 09h00 - 12h30, 13h30 - 19h00</p>
                              <p className="text-gray-600">Mar: 09h00 - 12h30, 13h30 - 19h00</p>
                              <p className="text-gray-600">Jeu: 09h00 - 12h30, 13h30 - 19h00</p>
                              <p className="text-gray-600">Ven: 09h00 - 12h30, 13h30 - 19h00</p>
                            </div>
                            <div>
                              <h3 className="font-medium mb-2">Contact d'urgence</h3>
                              <p className="text-gray-600">En cas d'urgence, contactez le 15 (Samu)</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h3 className="font-medium mb-2">Coordonnées</h3>
                            <p className="text-gray-600">05 57 81 28 51</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="faq" className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold mb-4">FAQ</h2>
                          <div className="space-y-4">
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Quelle est votre politique d'annulation ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                Les annulations doivent être effectuées au moins 24 heures à l'avance pour éviter des frais. Passé ce délai, des frais d'annulation pourront être appliqués.
                              </p>
                            </details>
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Proposez-vous des consultations virtuelles ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                Non, nous ne proposons pas encore de consultations virtuelles. Cependant, cela pourrait évoluer à l'avenir. Restez informé en consultant régulièrement notre site ou en nous contactant.
                              </p>
                            </details>
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Quelle est l'adresse du Dr Sarah Johnson ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                L'adresse du Dr Sarah Johnson est : [Insérez ici l'adresse exacte]. Veuillez vérifier les horaires avant de vous déplacer.
                              </p>
                            </details>
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Quelle est les moyens de paiement acceptés par le Dr Sarah Johnson ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                Le Dr Sarah Johnson accepte les paiements en espèces, par carte bancaire, ainsi que les chèques. Pour toute autre option, merci de contacter le cabinet.
                              </p>
                            </details>
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Est-ce que Dr Sarah Johnson accepte la carte Vitale ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                Oui, le Dr Sarah Johnson accepte la carte Vitale. Assurez-vous de l'avoir avec vous lors de votre consultation.
                              </p>
                            </details>
                            <details className="group">
                              <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="font-medium">Est-ce que Dr Sarah Johnson accepte les nouveaux patients ?</span>
                                <ChevronDown className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <p className="mt-2 text-gray-600">
                                Oui, le Dr Sarah Johnson accepte de nouveaux patients. Pour prendre rendez-vous, veuillez nous contacter directement ou utiliser notre système de réservation en ligne.
                              </p>
                            </details>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 ">
              <motion.div
                initial={{ opacity: 0, x: +50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    {/* <Link href="https://calendar.app.google/WWFfgydUMf3mBCkz9"
                      target="_blanc">
                      <Button className="w-full mb-4" size="lg">
                        <span className='my-[-10px] mx-3'>
                          <Image
                            src={IconGoogle}
                            width={60}
                            height={60}
                            alt='logo'
                            className="h-4 w-4"
                          />
                        </span>
                        Prendre rendez-vous
                      </Button>
                    </Link> */}

                    <Link href="/booking">
                      <Button className="w-full mb-4" size="lg">
                      <span className='my-[-10px] mx-1'>
                      <Calendar/>
                        </span>
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
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: +50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
              >
                <Card>
                  <CardContent className="p-6">
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
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
      <FooterBottom />
    </>
  )
}

