
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { authState, logout } = useAuth();
  const { user, isAuthenticated } = authState;

  // Close mobile menu on location change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', path: '/', requiresAuth: false },
    { name: 'Courses', path: '/courses', requiresAuth: false },
    { name: 'Assessments', path: '/assessments', requiresAuth: true },
    { name: 'Dashboard', path: '/dashboard', requiresAuth: true },
  ];

  // Filter links based on authentication status
  const filteredLinks = navLinks.filter(
    link => !link.requiresAuth || isAuthenticated
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md',
        scrolled ? 'bg-flytbase-dark/80 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold animate-fade-in"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-flytbase-blue to-[#AABDFF] flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="blue-gradient">FlytBase Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {filteredLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'relative py-2 text-sm font-medium transition-colors',
                  location.pathname === link.path
                    ? 'text-flytbase-blue'
                    : 'text-flytbase-light/80 hover:text-flytbase-light',
                  'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-flytbase-blue after:transform after:origin-bottom-right after:transition-transform after:duration-300',
                  location.pathname === link.path
                    ? 'after:scale-x-100 after:origin-bottom-left'
                    : 'after:scale-x-0'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Authentication or CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="relative rounded-full h-10 w-10 overflow-hidden bg-flytbase-blue/20 hover:bg-flytbase-blue/30"
                  >
                    {user?.avatar ? (
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="h-full w-full object-cover" 
                      />
                    ) : (
                      <User size={20} className="text-flytbase-light" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span>{user?.name}</span>
                      <span className="text-xs text-muted-foreground">{user?.email}</span>
                      <span className="mt-1 px-2 py-0.5 text-xs bg-flytbase-blue/20 text-flytbase-blue rounded-full w-fit">
                        {user?.role === 'admin' ? 'Admin' : 'Student'}
                      </span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer w-full">
                      <User size={16} className="mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={logout}
                    className="text-red-500 focus:text-red-500 cursor-pointer"
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button className="btn-primary">
                  Start Learning
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-flytbase-light p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="animate-scale-in" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <nav className="flex flex-col space-y-4 mb-4">
              {filteredLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'py-2 px-4 rounded-md transition-colors',
                    location.pathname === link.path
                      ? 'bg-flytbase-blue/20 text-flytbase-blue'
                      : 'text-flytbase-light/80 hover:bg-flytbase-dark/50 hover:text-flytbase-light'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            {isAuthenticated ? (
              <div className="flex flex-col space-y-2 px-4">
                <div className="flex items-center space-x-3 py-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-flytbase-blue/20">
                    {user?.avatar ? (
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="h-full w-full object-cover" 
                      />
                    ) : (
                      <User size={20} className="text-flytbase-light" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{user?.name}</div>
                    <div className="text-xs text-flytbase-light/60">{user?.email}</div>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 py-2 px-4 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="px-4">
                <Link to="/login" className="block w-full">
                  <Button className="btn-primary w-full">
                    Start Learning
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
