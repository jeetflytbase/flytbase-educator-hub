
import { useState, useEffect, createContext, useContext } from 'react';
import { AuthState, User } from './types';
import { ADMIN_EMAILS, mockUsers } from './data';
import { toast } from 'sonner';

// Initial authentication state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Create the authentication context
const AuthContext = createContext<{
  authState: AuthState;
  login: (email: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
} | undefined>(undefined);

// Auth provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('flytbase_user');
        
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setAuthState({
            ...initialState,
            isLoading: false,
          });
        }
      } catch (error) {
        console.error('Auth error:', error);
        setAuthState({
          ...initialState,
          isLoading: false,
          error: 'Authentication error',
        });
      }
    };

    checkAuth();
  }, []);

  // Email login (simulated magic link)
  const login = async (email: string): Promise<void> => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true }));

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Find user or create new one
      let user = mockUsers.find((u) => u.email === email);
      
      if (!user) {
        // Create new user
        user = {
          id: `user-${Date.now()}`,
          name: email.split('@')[0],
          email,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          role: ADMIN_EMAILS.includes(email) ? 'admin' : 'student',
          enrolledCourses: [],
          completedCourses: [],
          progress: {},
        };
      }

      // Save user to local storage
      localStorage.setItem('flytbase_user', JSON.stringify(user));

      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      toast.success('Logged in successfully');
    } catch (error) {
      console.error('Login error:', error);
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Login failed',
      }));

      toast.error('Login failed. Please try again.');
    }
  };

  // Google login (simulated)
  const loginWithGoogle = async (): Promise<void> => {
    try {
      setAuthState((prev) => ({ ...prev, isLoading: true }));

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate random Google user
      const randomEmails = [
        'user@example.com',
        'student@flytbase.com',
        'learner@gmail.com',
        'admin@flytbase.com',
      ];
      const email = randomEmails[Math.floor(Math.random() * randomEmails.length)];

      // Find user or create new one
      let user = mockUsers.find((u) => u.email === email);

      if (!user) {
        // Create new user
        user = {
          id: `user-${Date.now()}`,
          name: email.split('@')[0],
          email,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          role: ADMIN_EMAILS.includes(email) ? 'admin' : 'student',
          enrolledCourses: [],
          completedCourses: [],
          progress: {},
        };
      }

      // Save user to local storage
      localStorage.setItem('flytbase_user', JSON.stringify(user));

      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      toast.success('Logged in with Google successfully');
    } catch (error) {
      console.error('Google login error:', error);
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Google login failed',
      }));

      toast.error('Google login failed. Please try again.');
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('flytbase_user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ authState, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use authentication
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
