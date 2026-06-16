export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="font-bold text-xl mb-2">Hatsarana Malagasy</h3>

        <p className="text-slate-300 mb-2">
          Confection textile et aménagement intérieur / extérieur
        </p>

        <p className="text-slate-400 text-sm">
          Behoririka · hatsaranamdg@gmail.com · +261 34 027 2999
        </p>
        <a
          href="https://www.facebook.com/profile.php?id=100082791381347"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          Facebook : Hatsarana Malagasy
        </a>
      </div>
    </footer>
  );
}