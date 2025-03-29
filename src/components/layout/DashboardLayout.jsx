
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  LineChart, 
  Briefcase, 
  Calculator, 
  BookOpen, 
  MessageSquare, 
  Bell, 
  User, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const NavItem = ({ icon, label, link }) => (
    <a 
      href={link}
      className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-finance-primary"
    >
      <div className="mr-3 text-gray-500">{icon}</div>
      <span>{label}</span>
    </a>
  );
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      {isMobile && (
        <button 
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
      
      {/* Sidebar */}
      <div className={`
        bg-white shadow-md fixed inset-y-0 left-0 z-30 w-64 transition-transform duration-300 ease-in-out
        ${isMobile ? (isSidebarOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo area */}
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold text-finance-primary">FinAdvisory Lens</h2>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" link="/dashboard" />
            <NavItem icon={<Briefcase size={20} />} label="Portfolio" link="/portfolio" />
            <NavItem icon={<LineChart size={20} />} label="Market Data" link="/market" />
            <NavItem icon={<Calculator size={20} />} label="Tax Calculator" link="/tax" />
            <NavItem icon={<BookOpen size={20} />} label="Learning" link="/learning" />
            <NavItem icon={<MessageSquare size={20} />} label="AI Advisor" link="/advisor" />
          </nav>
          
          {/* User area */}
          <div className="p-4 border-t">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50 px-2"
              onClick={handleLogout}
            >
              <LogOut size={20} className="mr-3" />
              <span>Log out</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isMobile ? "ml-0" : "ml-64"}`}>
        {/* Header */}
        <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User size={20} />
            </button>
          </div>
        </header>
        
        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
      
      {/* Mobile sidebar overlay */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
