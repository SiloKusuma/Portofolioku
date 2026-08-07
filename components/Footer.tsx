export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 px-6 py-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-neutral-800">
          &copy; {new Date().getFullYear()} Silo Kusuma. All rights reserved 2026
        </p>
      </div>
    </footer>
  );
}
