"use client";

import { useEffect } from "react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-20">
      <h1 className="text-2xl font-bold text-slate-900">Something went wrong</h1>
      <p className="mt-3 text-sm text-slate-600">
        An unexpected error occurred. Try again, or contact us if it persists.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button onClick={() => reset()} variant="primary">
          Try again
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </div>
    </Container>
  );
}
