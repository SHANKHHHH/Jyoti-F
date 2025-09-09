import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/auth/SignInForm';
import backgroundImage from '../assets/background.png';
import logo from '../assets/logo.png';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Header with Logo */}
      <header className="w-full p-4 flex justify-start pl-24 bg-black/50 backdrop-blur-sm">
        <button
          onClick={() => navigate('/home')}
          className="focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md"
        >
          <img
            src={logo}
            alt="Jyoti Logo"
            className="h-12 w-auto"
          />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
