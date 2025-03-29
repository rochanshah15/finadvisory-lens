
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lightbulb, Send } from 'lucide-react';

const AIAdvisor = () => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your AI financial advisor. How can I help you with your investments today?"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { role: 'user', content: input };
    setConversation([...conversation, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses = {
        'invest': "Based on your risk profile, I recommend considering a diversified portfolio with 60% in index funds, 30% in blue-chip stocks, and 10% in bonds. This allocation provides a good balance between growth and stability.",
        'market': "The market has been showing volatility recently due to inflation concerns. However, the tech sector continues to show resilience. Keep an eye on upcoming Fed announcements which could impact market direction.",
        'tax': "For tax-efficient investing, consider maximizing your retirement accounts first. Then look into tax-advantaged investments like municipal bonds. Remember, long-term capital gains are taxed at a lower rate than short-term gains.",
        'retirement': "For retirement planning, the 4% rule suggests you can withdraw 4% of your portfolio annually. To achieve a retirement income of $50,000 per year, aim for a portfolio of approximately $1.25 million."
      };
      
      let response = "I'm here to help with your investment questions. Could you provide more details about what you're interested in? For example, investment strategies, market analysis, or retirement planning?";
      
      // Check if any keywords match
      Object.keys(aiResponses).forEach(key => {
        if (input.toLowerCase().includes(key)) {
          response = aiResponses[key];
        }
      });
      
      setConversation([...conversation, userMessage, { 
        role: 'assistant', 
        content: response
      }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <Lightbulb className="mr-2 text-finance-secondary" size={18} />
          AI Financial Advisor
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {conversation.map((message, index) => (
            <div 
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[80%] rounded-lg px-4 py-2
                  ${message.role === 'user' 
                    ? 'bg-finance-primary text-white' 
                    : 'bg-gray-100 text-gray-800'}
                `}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <Input
            placeholder="Ask about investments, markets, or tax strategies..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button 
            type="submit" 
            size="icon"
            disabled={isLoading || !input.trim()}
            className="bg-finance-primary hover:bg-finance-secondary"
          >
            <Send size={18} />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AIAdvisor;
