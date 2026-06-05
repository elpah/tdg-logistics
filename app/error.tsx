"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Something went wrong</h1>

        <button
          onClick={() => reset()}
          className="mt-4 rounded bg-primary px-4 py-2 text-primary-foreground"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
