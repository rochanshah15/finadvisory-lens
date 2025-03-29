
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Card, CardContent } from "@/components/ui/card";
import PortfolioSummary from '../components/dashboard/PortfolioSummary';
import MarketOverview from '../components/dashboard/MarketOverview';
import PortfolioChart from '../components/dashboard/PortfolioChart';
import AIAdvisor from '../components/dashboard/AIAdvisor';
import { getPortfolioData, getMarketData, getPortfolioChartData } from '../services/mockData';

const Dashboard = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [marketData, setMarketData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API calls
    setTimeout(() => {
      setPortfolioData(getPortfolioData());
      setMarketData(getMarketData());
      setChartData(getPortfolioChartData());
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // If loading, show skeleton
  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="animate-pulse">
            <CardContent className="h-40 bg-gray-200"></CardContent>
          </Card>
          <Card className="animate-pulse">
            <CardContent className="h-40 bg-gray-200"></CardContent>
          </Card>
        </div>
        <Card className="animate-pulse mb-6">
          <CardContent className="h-64 bg-gray-200"></CardContent>
        </Card>
        <Card className="animate-pulse">
          <CardContent className="h-80 bg-gray-200"></CardContent>
        </Card>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <PortfolioChart chartData={chartData} />
        </div>
        <div>
          <PortfolioSummary data={portfolioData} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Your Portfolio</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Name</th>
                      <th className="text-right py-2">Quantity</th>
                      <th className="text-right py-2">Invested</th>
                      <th className="text-right py-2">Current</th>
                      <th className="text-right py-2">Gain/Loss</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolioData.map((item) => {
                      const gainLoss = item.currentValue - item.investedAmount;
                      const gainLossPercent = ((gainLoss / item.investedAmount) * 100).toFixed(2);
                      const isPositive = gainLoss >= 0;
                      
                      return (
                        <tr key={item.id} className="border-b">
                          <td className="py-2 text-left">
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.symbol}</div>
                          </td>
                          <td className="py-2 text-right">{item.quantity}</td>
                          <td className="py-2 text-right">${item.investedAmount.toLocaleString()}</td>
                          <td className="py-2 text-right">${item.currentValue.toLocaleString()}</td>
                          <td className={`py-2 text-right ${isPositive ? 'gain' : 'loss'}`}>
                            {isPositive ? '+' : ''}{gainLoss.toLocaleString()} ({isPositive ? '+' : ''}{gainLossPercent}%)
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-6">
            <MarketOverview marketData={marketData} />
            <AIAdvisor />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
