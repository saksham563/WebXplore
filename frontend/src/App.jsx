import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/footer/Footer';
import {HeaderData} from './components/header/HeaderData.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import BackToTop from './components/BackToTop';
import PopUp from './components/popup/PopUp';
import Cookies from './components/cookie/Cookie.jsx'
import Chatbot from './components/chatbot/Chatbot.jsx'
import React from 'react';
import './index.css';

function App() {
  const location = useLocation(); // Access the current location (route)

  // Function to update document title dynamically based on the page
  const getTitle = (path) => {
    const pageNames = {
      '/': 'Home',
      '/home': 'Home',
      '/service': 'Service',
      '/portfolio': 'Portfolio',
      '/casestudy': 'Case Study',
      '/pricing': 'Pricing',
      '/contact': 'Contact',
      '/home/blogpage': 'Blogpage',
      '/aboutus': 'About Us',
      '/services': 'Our Services',
      '/service/webdevelopment':'Web Dev',
      '/service/mobiledevelopment':'Mobile Dev',
      '/service/otherservices':'Others',
      '/service/webdevelopment/contact':'Contact Us',
      '/service/mobiledevelopment/contact':'Contact Us',
      '/service/otherservices/contact':'Contact Us',
      '/portfolio/contact':'Contact Us',
      '/webdevelopment':'Web Development',
      '/mobiledevelopment':'Mobile Development',
      '/service/SEO':'SEO',
      '/service/PaymentGatewayIntegration':'Payment Gateway Integration',
      '/service/AI_Integration_Services':'AI Integration Services',
      '/service/SocialMediaMarketing':'Social Media Marketing',
      '/faq/contact':'Contact Us',
      '/aboutus/service/webdevelopment':'Web Dev',
      '/aboutus/service/mobiledevelopment':'Mobile Dev',
      '/aboutus/service/otherservices':'Others',
      '/webdevelopment/contact':'Contact Us',
      '/mobiledevelopment/contact':'Contact Us',
      '/blogpage':'Blogpage',
      '/faq':'FAQ',
      '/privacypolicy':'Privacy Policy',
      '/termsandcondtion':'T & C',
      '/cookiespolicy':'Cookies Policy',
      '/sitemap':'Sitemap',
      // Add more routes as needed
    };

    // Return the page title with "WebXplore Studio" prefix
    return pageNames[path] ? `WebXplore Studio | ${pageNames[path]}` : 'WebXplore Studio';
  };

  // Update document title when the route changes
  React.useEffect(() => {
    document.title = getTitle(location.pathname);
  }, [location]);
  return (
    <>
    
      <HeaderData />
      <Outlet />
      <Cookies/>
      <Chatbot/>
      {/* <PopUp/> */}
      <BackToTop/>
      <Footer />
    </>

  )
}

export default App
