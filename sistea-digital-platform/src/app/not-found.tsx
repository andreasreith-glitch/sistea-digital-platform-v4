import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sistea-blue">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-sistea-navy">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-sistea-gray-500">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link
          href="/es"
          className="mt-8 inline-flex rounded-[8px] bg-sistea-accent px-6 py-3 font-semibold text-white"
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
