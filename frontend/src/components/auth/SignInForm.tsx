import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
      <img src="/logo.png" alt="Logo" className="mx-auto mb-4 w-20" />
      <h2 className="text-2xl font-semibold mb-6">Sign In</h2>

      <form>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Your Password"
          className="w-full mb-2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mr-2"
          />
          <label htmlFor="showPassword" className="text-sm text-gray-600">
            Show Password
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 rounded-md transition duration-300 hover:bg-emerald-600"
        >
          Submit
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-600">
        <a href="#" className="hover:underline">Forgot your password?</a>
      </div>

      <div className="mt-2 text-sm text-gray-600">
        <span>Don't have an account? </span>
        <Link to="/signup" className="text-blue-500 hover:underline">
          Create a new account
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;