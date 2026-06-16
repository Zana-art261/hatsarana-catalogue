import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Accueil", href: "#home" },
    { label: "Pourquoi nous choisir", href: "#why-us" },
    { label: "Réalisations", href: "#gallery" },
    { label: "Produits", href: "#products" },
    { label: "Références", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#home" className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Hatsarana Malagasy"
            className="h-20 w-auto"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800">
              Hatsarana Malagasy
            </h1>

            <p className="text-sm text-slate-500">
              Uniformes professionnels personnalisés
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-green-600 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-800"
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 font-medium hover:text-green-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}