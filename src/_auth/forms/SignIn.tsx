import { SignIn } from '@clerk/clerk-react';

const SignInForm = () => {
  
  return (
    <div>
      <section className="mb-12 space-y-4">
        <h1 className="header">Welcome to HealthTrack</h1>
        <p className="text-dark-700">Healthier lives, one track at a time.</p>
      </section>
      <SignIn />
    </div>
  );
};

export default SignInForm;