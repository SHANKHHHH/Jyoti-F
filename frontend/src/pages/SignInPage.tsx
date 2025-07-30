import React from 'react';
import SignInForm from '../components/auth/SignInForm';
import backgroundImage from '../assets/background.png';

const SignInPage: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SignInForm />
    </div>
  );
};

export default SignInPage;
