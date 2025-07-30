import SignUpForm from '../components/auth/SignUpForm';
import backgroundImage from '../assets/background.png'; // ✅ Import image

const SignUp = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // ✅ Correct string interpolation
      }}
    >
      <SignUpForm />
    </div>
  );
};

export default SignUp;
