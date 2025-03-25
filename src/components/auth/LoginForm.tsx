
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      return; // Add validation error handling if needed
    }
    
    setIsLoading(true);
    
    try {
      await login(email);
      navigate('/courses');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    
    try {
      await loginWithGoogle();
      navigate('/courses');
    } catch (error) {
      console.error('Google login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 blue-gradient inline-block">
          Welcome to FlytBase Academy
        </h2>
        <p className="text-flytbase-light/70">
          Sign in to continue your learning journey
        </p>
      </div>

      <div className="glass-card rounded-xl p-8 border border-white/10">
        {/* Google Sign In */}
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white text-flytbase-dark font-medium mb-6 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-flytbase-blue focus:ring-offset-2 focus:ring-offset-flytbase-dark"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="flex items-center justify-center my-6">
          <div className="flex-1 h-px bg-flytbase-light/10"></div>
          <div className="px-4 text-sm text-flytbase-light/50">OR</div>
          <div className="flex-1 h-px bg-flytbase-light/10"></div>
        </div>

        {/* Email Sign In */}
        <form onSubmit={handleEmailLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-flytbase-light/70 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-flytbase-light/50 h-5 w-5" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-flytbase-dark border border-white/10 text-flytbase-light placeholder:text-flytbase-light/40 focus:outline-none focus:ring-1 focus:ring-flytbase-blue"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading || !email}
            className="w-full bg-flytbase-blue hover:bg-flytbase-blue/90 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            {isLoading ? (
              'Signing in...'
            ) : (
              <>
                <span>Continue with Email</span>
                <ArrowRight size={18} />
              </>
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-flytbase-light/50">
          By continuing, you agree to FlytBase Academy's
          <a href="#" className="text-flytbase-blue hover:underline ml-1">
            Terms of Service
          </a>{" "}
          and
          <a href="#" className="text-flytbase-blue hover:underline ml-1">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
