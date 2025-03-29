
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortfolioSummary = ({ data }) => {
  // Calculate the total portfolio value
  const totalValue = data.reduce((sum, item) => sum + item.currentValue, 0);
  
  // Calculate the total gain/loss
  const totalInvested = data.reduce((sum, item) => sum + item.investedAmount, 0);
  const totalGainLoss = totalValue - totalInvested;
  const totalGainLossPercent = ((totalGainLoss / totalInvested) * 100).toFixed(2);
  
  const isPositive = totalGainLoss >= 0;
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Portfolio Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Total Value</p>
            <h3 className="text-2xl font-bold">${totalValue.toLocaleString()}</h3>
          </div>
          
          <div className="flex items-center">
            <div className="mr-4">
              <p className="text-sm text-gray-500">Total Gain/Loss</p>
              <div className="flex items-center">
                <h3 className={`text-xl font-bold ${isPositive ? 'gain' : 'loss'}`}>
                  {isPositive ? '+' : ''}{totalGainLoss.toLocaleString()}
                </h3>
                <span className={`ml-2 flex items-center ${isPositive ? 'gain' : 'loss'}`}>
                  {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  {isPositive ? '+' : ''}{totalGainLossPercent}%
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Assets</p>
              <p className="font-medium">{data.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Invested</p>
              <p className="font-medium">${totalInvested.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummary;
