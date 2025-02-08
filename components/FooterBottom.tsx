import { Heart } from "lucide-react"
import Link from "next/link"

export default function FooterBottom() {
  return (
    <>
      <div className="border-t mt-4"></div>

      {/* Bottom: Copyright */}
      <div >
        <p className="text-center text-sm text-foreground/60">
          © 2025 Dr Sarah Johnson | Cabinet Médical Medoc | Crée avec{" "}
          <Heart className="inline-block h-4 w-4 text-green-500" /> par{" "}
          <Link href="https://www.andyramaroson.com" className="font-medium text-foreground underline-offset-4 hover:underline" target="_Blank">
            Andy ramaroson
          </Link>
        </p>
      </div>
    </>
  )
}

