
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import { useAuth } from '@/lib/auth';

const Login = () => {
  const { authState } = useAuth();
  const { isAuthenticated } = authState;
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/courses');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <div className="mb-6 text-center">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-flytbase-blue to-[#AABDFF] flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="text-xl font-bold blue-gradient">FlytBase Academy</span>
            </div>
          </Link>
        </div>
        
        <LoginForm />
        
        <div className="mt-8 text-center">
          <p className="text-flytbase-light/50 text-sm">
            Need help? <a href="#" className="text-flytbase-blue hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
