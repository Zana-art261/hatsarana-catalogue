import { useState } from "react";
import { products } from "../data/products";

export default function Products() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="products" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Nos produits</h2>

        <p className="text-center text-slate-600 mb-12">
          Des tenues professionnelles personnalisables selon vos besoins.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                onClick={() => setSelectedImage(product.image)}
                className="w-full h-[500px] object-contain bg-gray-50 cursor-zoom-in"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>

                <p className="text-green-700 font-semibold mb-3">
                  {product.price}
                </p>

                <p className="text-slate-600 mb-5">{product.description}</p>

                <a
                  href="https://wa.me/261340272999"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-slate-800 text-white px-5 py-2 rounded-lg hover:bg-slate-900"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <img
            src={selectedImage}
            alt="Produit agrandi"
            className="max-w-full max-h-full object-contain rounded-lg bg-white"
          />
        </div>
      )}
    </section>
  );
}