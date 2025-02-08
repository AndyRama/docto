import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import Link from "next/link"
import { Smartphone, House, Mail } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="p-0 border mt-10 px-4 rounded-md mt-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 py-6">
            <div>
              <Link href="/" className="flex items-start text-lg font-medium transition-colors hover:text-foreground/80">
                <Image
                  src="/Cabinet_logo.png"
                  alt="image cabinet"
                  width={15}
                  height={15}
                  className="object-cover mr-2 mt-2"
                />
                Dr Sarah Johnson
              </Link>
              <div className="flex flex-row py-2">
                <span><House className="h-4 w-4 mr-2 mt-0.5 text-black-500" /></span>
                <p className="text-sm text-foreground/60">5 Place Gambetta, 33340 Lesparre-Médoc</p>
              </div>
              <div className="flex flex-row py-2">
                <span><Mail className="h-4 w-4 mr-2 mt-0.5 text-black-500" /></span>
                <p className="text-sm text-foreground/60">Email: drjohnsonsarah@gmail.com</p>
              </div>
              <div className="flex flex-row py-2">
                <span><Smartphone className="h-4 w-4 mr-2 mt-0.5 text-black-500" /></span>
                <p className="text-sm text-foreground/60">Téléphone: 05 57 81  28 51</p>
              </div>
            </div>

            <div className="flex flex-row justify-around items-center md:gap-10">
              <nav className="flex flex-col items-center gap-2">
                <h3 className="text-gray-500 font-semibold text-md">Site</h3>
                <Link
                  href="/"
                  className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
                >
                 Home
                </Link>

                <Link
                  href="/info"
                  className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
                >
                  Informations
                </Link>
              </nav>

              <nav className="flex flex-col items-center gap-2">
                <h3 className="text-gray-500 font-semibold text-md">Services</h3>
                <Link
                  href="https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fvc4rhqfcil9mdye5.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&utm_source=lh-chrome-ext#"
                  className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
                  target="_blank"
                >
                  Prise de rendez-vous
                </Link>
                <Link
                  href="https://www.websitecarbon.com/website/vc4rhqfcil9mdye5-vercel-app/"
                  className="flex items-center gap-1 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
                  target="_blank"
                >
                  Urgence
                </Link>
              </nav>

              <nav className="flex flex-col items-center gap-2">
                <h3 className="text-gray-500 font-semibold text-md">Performance</h3>
                <Link
                  href="https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fvc4rhqfcil9mdye5.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&utm_source=lh-chrome-ext#"
                  className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
                  target="_blank"
                >
                  LighHouse
                </Link>
                <Link
                  href="https://www.websitecarbon.com/website/vc4rhqfcil9mdye5-vercel-app/"
                  className="flex items-center gap-1 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
                  target="_blank"
                >
                  CO2
                  <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100/80">
                    New
                  </Badge>
                </Link>
              </nav>
            </div>
          </div>
        </div >
      </motion.div>
    </>
  )
}

