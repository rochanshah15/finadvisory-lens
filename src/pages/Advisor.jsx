
import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import AIAdvisor from '../components/dashboard/AIAdvisor';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Advisor = () => {
  const commonQuestions = [
    "What investment strategy is best for me?",
    "How should I prepare for retirement?",
    "How can I minimize my tax liability?",
    "What's the outlook for the market?",
    "Should I invest in individual stocks or ETFs?",
    "How much should I save for retirement?"
  ];

  const handleQuestionClick = (question) => {
    // In a real app, this would send the question to the AI component
    console.log("Question selected:", question);
    // You could use a ref or state management to send this to the AIAdvisor component
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col h-[calc(100vh-180px)]">
          <AIAdvisor />
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Common Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {commonQuestions.map((question, index) => (
                <Button 
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-2 text-gray-700 hover:text-finance-primary"
                  onClick={() => handleQuestionClick(question)}
                >
                  {question}
                </Button>
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AI Advisor Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-finance-primary text-white p-1 rounded-full mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Personalized investment advice</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-primary text-white p-1 rounded-full mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Tax optimization suggestions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-primary text-white p-1 rounded-full mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Market analysis and insights</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-primary text-white p-1 rounded-full mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Retirement planning calculations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-primary text-white p-1 rounded-full mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Regulatory compliance guidance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Advisor;
