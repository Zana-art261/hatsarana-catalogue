export default function Hero() {
  return (
    <section id="home" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-green-400 font-semibold mb-4">
            Confection textile professionnelle à Madagascar
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Habillez vos équipes avec des tenues sur mesure
          </h2>

          <p className="text-lg text-slate-200 mb-8">
            Hatsarana Malagasy conçoit des uniformes, combinaisons,
            gilets, blousons et imperméables personnalisés pour
            entreprises, professionnels, ONG et équipes terrain.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-white/10 px-4 py-2 rounded-full">
              Combinaisons
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full">
              Uniformes médicaux
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full">
              Gilets
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full">
              Imperméables
            </span>
          </div>

          <a
            href="https://wa.me/261340272999"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700"
          >
            Demander un devis
          </a>
        </div>

        <div className="bg-white/10 rounded-3xl p-4 shadow-2xl">
          <img
            src="/images/hero.jpeg"
            alt="Tenues professionnelles Hatsarana Malagasy"
            className="w-full h-[420px] object-contain rounded-2xl bg-white"
          />
        </div>
      </div>
    </section>
  );
}