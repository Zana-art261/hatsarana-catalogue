import { Factory, BadgeCheck, Ruler, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const avantages = [
    {
      titre: "Fabrication locale",
      texte: "Production réalisée à Madagascar avec un suivi de qualité rigoureux.",
      Icon: Factory,
    },
    {
      titre: "Personnalisation",
      texte: "Broderie, impression et adaptation selon votre identité visuelle.",
      Icon: BadgeCheck,
    },
    {
      titre: "Sur mesure",
      texte: "Tenues adaptées à votre métier, votre activité et vos besoins.",
      Icon: Ruler,
    },
    {
      titre: "Qualité professionnelle",
      texte: "Tissus résistants conçus pour durer dans les environnements exigeants.",
      Icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Pourquoi choisir Hatsarana ?
        </h2>

        <p className="text-center text-slate-600 mb-12">
          Des solutions textiles professionnelles adaptées aux entreprises,
          ONG et organisations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {avantages.map(({ titre, texte, Icon }) => (
            <div
              key={titre}
              className="bg-slate-50 p-6 rounded-xl shadow-sm border-t-4 border-green-600"
            >
              <Icon className="w-10 h-10 text-green-600 mb-4" />

              <h3 className="font-bold text-xl mb-3 text-slate-800">
                {titre}
              </h3>

              <p className="text-slate-600">
                {texte}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}