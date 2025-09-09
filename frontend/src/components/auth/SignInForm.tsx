import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const SignInForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn(email, password);
      // ✅ Redirect to homepage after successful login
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
      <h2 className="text-2xl font-semibold mb-6">Sign In</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          disabled={loading}
          className="w-full bg-emerald-500 text-white py-2 rounded-md transition duration-300 hover:bg-emerald-600 disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Submit"}
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
