import { useState } from "react";
import { gallery } from "../data/gallery";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleGallery = showAll ? gallery : gallery.slice(0, 4);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Nos réalisations
        </h2>

        <p className="text-center text-slate-600 mb-12">
          Quelques exemples de confections réalisées par Hatsarana Malagasy.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visibleGallery.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow-md bg-slate-100 cursor-zoom-in"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-4 bg-white">
                <h3 className="font-semibold text-slate-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {gallery.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition"
            >
              {showAll
                ? "Voir moins"
                : "Voir toutes les réalisations"}
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <img
            src={selectedImage}
            alt="Réalisation agrandie"
            className="max-w-full max-h-full object-contain rounded-lg bg-white"
          />
        </div>
      )}
    </section>
  );
}