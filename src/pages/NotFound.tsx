import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-feminine-background-alt p-4">
      <div className="text-center max-w-md">
        <Shield className="h-20 w-20 mx-auto mb-6 text-feminine-primary" />
        <h1 className="text-5xl font-bold mb-4 text-feminine-primary">404</h1>
        <p className="text-xl text-feminine-text-primary mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full">
            <Link to="/">Return to Homepage</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            If you believe this is an error, please{" "}
            <Link to="/contact" className="text-feminine-primary hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
