
// Mock portfolio data
export const getPortfolioData = () => {
  return [
    {
      id: 1,
      name: "Apple Inc.",
      symbol: "AAPL",
      investedAmount: 10000,
      currentValue: 12500,
      quantity: 50,
      sector: "Technology"
    },
    {
      id: 2,
      name: "Microsoft",
      symbol: "MSFT",
      investedAmount: 8000,
      currentValue: 9200,
      quantity: 30,
      sector: "Technology"
    },
    {
      id: 3,
      name: "Amazon",
      symbol: "AMZN",
      investedAmount: 6000,
      currentValue: 5800,
      quantity: 40,
      sector: "Consumer Discretionary"
    },
    {
      id: 4,
      name: "Tesla",
      symbol: "TSLA",
      investedAmount: 5000,
      currentValue: 5300,
      quantity: 20,
      sector: "Automotive"
    }
  ];
};

// Mock market data
export const getMarketData = () => {
  return [
    {
      name: "S&P 500",
      symbol: "SPX",
      price: "4,732.54",
      change: 0.63
    },
    {
      name: "Dow Jones",
      symbol: "DJI",
      price: "36,117.38",
      change: 0.32
    },
    {
      name: "Nasdaq",
      symbol: "IXIC",
      price: "14,665.12",
      change: -0.21
    },
    {
      name: "Bitcoin",
      symbol: "BTC-USD",
      price: "$43,762.15",
      change: 1.87
    },
    {
      name: "Gold",
      symbol: "GC=F",
      price: "$1,937.80",
      change: 0.15
    }
  ];
};

// Mock portfolio performance chart data
export const getPortfolioChartData = () => {
  return [
    { date: "Jan", value: 30000 },
    { date: "Feb", value: 29500 },
    { date: "Mar", value: 31200 },
    { date: "Apr", value: 32000 },
    { date: "May", value: 31800 },
    { date: "Jun", value: 33500 },
    { date: "Jul", value: 34200 },
    { date: "Aug", value: 33800 },
    { date: "Sep", value: 32800 },
    { date: "Oct", value: 33000 },
    { date: "Nov", value: 32500 },
    { date: "Dec", value: 32800 },
  ];
};

// Mock tax calculations
export const calculateTaxes = (income, capitalGains) => {
  // Simple progressive tax calculation
  let incomeTax = 0;
  if (income <= 10000) {
    incomeTax = income * 0.1;
  } else if (income <= 40000) {
    incomeTax = 1000 + (income - 10000) * 0.12;
  } else if (income <= 85000) {
    incomeTax = 4600 + (income - 40000) * 0.22;
  } else if (income <= 160000) {
    incomeTax = 14500 + (income - 85000) * 0.24;
  } else {
    incomeTax = 32500 + (income - 160000) * 0.32;
  }

  // Long-term capital gains tax (simplified)
  const capitalGainsTax = capitalGains * 0.15;

  return {
    incomeTax: Math.round(incomeTax),
    capitalGainsTax: Math.round(capitalGainsTax),
    totalTax: Math.round(incomeTax + capitalGainsTax)
  };
};
