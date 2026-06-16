import { clients } from "../data/clients";

export default function TrustedBy() {
  return (
    <section id="clients" className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Nos références
        </h2>

        <p className="text-center text-slate-600 mb-12">
          Des entreprises et organisations nous font confiance pour leurs besoins en confection textile.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center text-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 max-w-full object-contain mb-4"
              />

              <span className="font-semibold text-slate-700">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}