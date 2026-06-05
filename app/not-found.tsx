import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>

        <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>

        <p className="mt-4 text-muted-foreground">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-sm bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
          >
            Back Home
          </Link>

          <Link
            href="/contact"
            className="rounded-sm border px-6 py-3 hover:bg-muted"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
