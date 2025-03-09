
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getCurrentUser, signOut, User as UserType } from '@/services/authService';
import { toast } from 'sonner';

export const AuthStatus = () => {
  const [user, setUser] = useState<UserType | null>(null);
  
  useEffect(() => {
    // Check if user is logged in
    const currentUser = getCurrentUser();
    setUser(currentUser);
    
    // Set up event listener for storage changes (for multi-tab support)
    const handleStorageChange = () => {
      const updatedUser = getCurrentUser();
      setUser(updatedUser);
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const handleSignOut = () => {
    signOut();
    setUser(null);
    toast.success('Signed out successfully');
  };
  
  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Link to={`/profile/${user.id}`} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
          <span className="hidden md:inline">{user.name}</span>
        </Link>
        <Button variant="outline" size="sm" onClick={handleSignOut} className="flex items-center gap-1">
          <LogOut className="h-4 w-4" />
          <span className="hidden md:inline">Sign Out</span>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/signin">Sign In</Link>
      </Button>
      <Button size="sm" asChild>
        <Link to="/signup">Sign Up</Link>
      </Button>
    </div>
  );
};

export default AuthStatus;
