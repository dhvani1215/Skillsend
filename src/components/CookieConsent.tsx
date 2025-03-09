
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent = ({ onAccept }: CookieConsentProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
          <Link to="/cookies" className="underline hover:text-foreground">
            Learn more
          </Link>
        </div>
        <div className="flex gap-4">
          <Button onClick={onAccept} variant="default">
            Accept
          </Button>
          <Button variant="outline" asChild>
            <Link to="/cookies">Cookie Policy</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
