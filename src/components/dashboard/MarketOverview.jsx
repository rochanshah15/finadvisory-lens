
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from 'lucide-react';

const MarketOverview = ({ marketData }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {marketData.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.symbol}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{item.price}</p>
                <div className={`flex items-center justify-end ${item.change >= 0 ? 'gain' : 'loss'}`}>
                  {item.change >= 0 ? 
                    <ArrowUp size={14} className="mr-1" /> : 
                    <ArrowDown size={14} className="mr-1" />
                  }
                  <span>{item.change >= 0 ? '+' : ''}{item.change}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
