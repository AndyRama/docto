import React from "react";

export default function LegalMentions() {
  return (
    <div className="text-gray-900 flex items-center justify-center pt-20" >
      <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-8 max-w-4xl w-full space-y-8 animate-fade-in">
        <header className="bg-[#4BB484] text-white py-4 px-6 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Mentions Légales</h1>
        </header>

        <main >
          <section className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold">Informations de l'éditeur</h2>
            <p>
              <strong>Nom :</strong> Dr Sarah Johnson
            </p>
            <p>
              <strong>Profession :</strong> Médecin Généraliste
            </p>
            <p>
              <strong>Adresse du cabinet :</strong> Bordeaux, France
            </p>
            <p>
              <strong>Numéro de téléphone :</strong> +33 5 57 81 28 51
            </p>
            <p>
              <strong>Email :</strong> contact@drsarahjohnson.fr
            </p>
            <p>
              <strong>Numéro RPPS :</strong> 12345678910
            </p>
            <p>
              <strong>Numéro SIRET :</strong> 123 456 789 00012
            </p>
          </section>

          <section className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold">Hébergement du site</h2>
            <p>
              <strong>Hébergeur :</strong> Vercel Inc.
            </p>
            <p>
              <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            </p>
            <p>
              <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" className="text-gre-500 underline">https://vercel.com</a>
            </p>
          </section>

          <section className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
            <p>
              Le contenu de ce site (textes, images, logo, etc.) est protégé par le droit d'auteur. Toute reproduction, distribution, modification ou exploitation du contenu, sans autorisation préalable, est strictement interdite.
            </p>
          </section>

          <section className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold">Responsabilité</h2>
            <p>
              Ce site a pour but de fournir un calendrier en ligne pour la prise de rendez-vous avec Dr Sarah, géré par Calendly. Les informations présentes sur ce site sont fournies à titre indicatif et ne remplacent pas une consultation médicale en personne.
            </p>
          </section>

          <section className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold">Données personnelles</h2>
            <p>
              Ce site respecte la confidentialité des données personnelles conformément au Règlement Général sur la Protection des Données (RGPD). Les données collectées via le calendrier en ligne sont utilisées exclusivement pour la gestion des rendez-vous et ne sont pas partagées avec des tiers sans consentement préalable.
            </p>
            <p>
              Le service de calendrier en ligne est fourni par Calendly. Pour en savoir plus sur leur politique de confidentialité, veuillez consulter leur site officiel : <a href="https://calendly.com" target="_blank" className="text-gre-500 underline">https://calendly.com</a>.
            </p>
          </section>

          <section className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold">Développement du site</h2>
            <p>
              Ce site a été conçu et développé par Andy Ramaroson, développeur web Full stack Js spécialisé dans la création de solutions modernes et performantes.
            </p>
            <p>
              Pour toute question technique ou support lié au site, veuillez contacter :
            </p>
            <p>
              <strong>Email :</strong> contact@i-doctor.fr
            </p>
          </section>



          <section className="space-y-6 mt-6">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p>
              Pour toute question ou réclamation, vous pouvez nous contacter :
            </p>
            <p>
              <strong>Email :</strong> contact@drsarahjohnson.fr
            </p>
            <p>
              <strong>Téléphone :</strong> +33 5 57 81 28 51
            </p>
            <p>
              <strong>Adresse :</strong> Bordeaux, France
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
