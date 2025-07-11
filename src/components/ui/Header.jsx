import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', path: '/home-page', icon: 'Home' },
    { label: 'Packages', path: '/travel-packages-catalog', icon: 'MapPin' },
    { label: 'About Us', path: '/about-us', icon: 'Info' },
    { label: 'Contact', path: '/contact-us', icon: 'Phone' },
    { label: 'Dashboard', path: '/user-dashboard', icon: 'User' }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsAuthModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ease-out ${
          isScrolled 
            ? 'bg-surface/95 backdrop-blur-nav shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              to="/home-page" 
              className="flex items-center space-x-2 group"
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transition-transform duration-200 ease-out group-hover:scale-105">
                <Icon 
                  name="Plane" 
                  size={20} 
                  color="white" 
                  className="lg:w-6 lg:h-6"
                />
              </div>
              <span className="text-xl lg:text-2xl font-heading font-bold text-gradient">
                TravelEase
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out hover:bg-surface-hover ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary-50' :'text-text-primary hover:text-primary'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="ghost"
                onClick={() => openAuthModal('login')}
                className="text-text-primary hover:text-primary"
              >
                Login
              </Button>
              <Button
                variant="primary"
                onClick={() => openAuthModal('signup')}
                iconName="UserPlus"
                iconSize={16}
              >
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-surface-hover transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-surface border-t border-border shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ease-out ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary-50' :'text-text-primary hover:bg-surface-hover'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border space-y-2">
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={() => openAuthModal('login')}
                  className="justify-start text-text-primary"
                  iconName="LogIn"
                  iconSize={20}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => openAuthModal('signup')}
                  className="justify-start"
                  iconName="UserPlus"
                  iconSize={20}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-1200 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-surface rounded-2xl shadow-modal w-full max-w-md animate-fade-in">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-semibold text-text-primary">
                  {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <button
                  onClick={() => setIsAuthModalOpen(false)}
                  className="p-2 rounded-lg text-text-secondary hover:bg-surface-hover transition-colors duration-200"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {authMode === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                    placeholder="Enter your password"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  className="mt-6"
                >
                  {authMode === 'login' ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  className="text-sm text-primary hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  {authMode === 'login' ? "Don't have an account? Sign up" :"Already have an account? Sign in"
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;