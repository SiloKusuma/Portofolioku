export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} Marvin Silo Kusuma
        </p>
        <p className="text-xs text-neutral-400">
          Dibangun dengan Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
