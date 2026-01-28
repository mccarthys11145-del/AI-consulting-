import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <Container className="py-20">
      <h1 className="text-2xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-sm text-slate-600">
        The page you’re looking for doesn’t exist. If you think this is a mistake, contact us.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="primary">
          Go home
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </div>
      <p className="mt-6 text-xs text-slate-500">
        <Link href="/" className="hover:text-brand-700">/</Link>
      </p>
    </Container>
  );
}
