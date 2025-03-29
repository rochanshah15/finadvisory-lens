
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetStarted = () => {
    navigate('/signup');
    toast({
      title: "Welcome!",
      description: "Create an account to get started with FinAdvisory Lens.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6 md:px-12">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-finance-primary">FinAdvisory Lens</h1>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={() => navigate('/login')}
              className="border-finance-primary text-finance-primary hover:bg-finance-primary/10"
            >
              Log in
            </Button>
            <Button 
              onClick={() => navigate('/signup')}
              className="bg-finance-primary hover:bg-finance-secondary"
            >
              Sign up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-finance-dark">
            Make Smarter Financial Decisions with <span className="text-finance-primary">AI</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            FinAdvisory Lens brings the power of AI to your personal investments.
            Get personalized advice, track your portfolio, and stay compliant with tax regulations.
          </p>
          <Button 
            size="lg" 
            onClick={handleGetStarted}
            className="bg-finance-primary hover:bg-finance-secondary px-8 py-6 text-lg"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-finance-dark">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-finance-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-finance-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-finance-dark">AI-Powered Advice</h3>
              <p className="text-gray-600">
                Get personalized investment recommendations based on your financial goals and risk profile.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-finance-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-finance-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-finance-dark">Portfolio Tracking</h3>
              <p className="text-gray-600">
                Monitor your investments with interactive charts and real-time market data.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-finance-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-finance-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-finance-dark">Tax Optimization</h3>
              <p className="text-gray-600">
                Understand your tax obligations and find opportunities to optimize your investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-finance-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your investment experience?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of investors who are making smarter decisions with FinAdvisory Lens.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleGetStarted}
            className="bg-white text-finance-primary hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Create Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p className="mb-2">© 2023 FinAdvisory Lens. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-finance-primary">Privacy Policy</a>
            <a href="#" className="hover:text-finance-primary">Terms of Service</a>
            <a href="#" className="hover:text-finance-primary">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
