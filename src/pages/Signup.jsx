
import React from 'react';
import SignupForm from '../components/auth/SignupForm';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-finance-primary">FinAdvisory Lens</h1>
          <p className="mt-2 text-sm text-gray-600">
            Your AI-powered financial assistant
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
