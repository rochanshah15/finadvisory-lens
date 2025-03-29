
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Shield, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-finance-primary">FinAdvisory Lens</h1>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-finance-primary">Login</Link>
            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">AI-Powered Financial Insights for Everyone</h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Make smarter investment decisions with personalized AI guidance, real-time market data, and comprehensive portfolio tracking.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-finance-primary hover:bg-finance-secondary">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-6 w-6 text-finance-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Portfolio Tracking</h3>
                <p className="text-gray-600">
                  Monitor your investments in real-time with comprehensive visualizations and performance metrics.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-finance-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Financial Advisor</h3>
                <p className="text-gray-600">
                  Get personalized investment recommendations and answers to your financial questions.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LineChart className="h-6 w-6 text-finance-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Market Insights</h3>
                <p className="text-gray-600">
                  Stay up-to-date with market trends, news, and data-driven insights to inform your decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">
                  "FinAdvisory Lens has transformed how I manage my investments. The AI advisor helped me optimize my portfolio and save on taxes."
                </p>
                <p className="font-bold">- Sarah J., Retail Investor</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">
                  "The market insights and portfolio tracking features are incredible. I finally feel confident in my investment decisions."
                </p>
                <p className="font-bold">- Michael T., Part-time Trader</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FinAdvisory Lens</h3>
              <p className="text-gray-400">
                Your AI-powered financial assistant
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Portfolio Tracking</li>
                <li>AI Advisor</li>
                <li>Market Insights</li>
                <li>Tax Planning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
            <p>© 2023 FinAdvisory Lens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
