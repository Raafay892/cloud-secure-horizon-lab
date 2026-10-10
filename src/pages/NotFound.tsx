import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-background-dark px-4 text-white">
      <div className="absolute inset-0 grid-backdrop" aria-hidden />
      <div className="relative max-w-md text-center">
        <p className="font-mono text-sm uppercase tracking-[0.14em] text-brand-primary-light">Error 404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-white/70">The page you're looking for doesn't exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild variant="inverse">
            <Link to="/">
              <ArrowLeft /> Back to home
            </Link>
          </Button>
          <Button asChild variant="outline-inverse">
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
