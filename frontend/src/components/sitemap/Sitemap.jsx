import img from '../../assets/arrow.png'
import { NavLink } from 'react-router-dom';
import './Sitemap.css'
import pdf from "../../assets/cs1.pdf";
import { useEffect } from 'react';

const Sitemap = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const openPdf = () => {
        window.open(pdf, "_blank"); // Open the PDF in a new tab
    };

    return (
        <div className="sitemap-container">
            <h1>Sitemap</h1>
            <div className="sitemap-section">
                <h2>Home</h2>
                <ul className="list-unstyled">
                    <li><NavLink to="/home">Go To Home Page</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li><NavLink to="/blogpage">BlogPage</NavLink></li>
                </ul>
            </div>
            <div className="sitemap-section">
                <h2>Services</h2>
                <ul className="list-unstyled">
                    <li><NavLink to="/service">Go To Service Page</NavLink></li>
                    <li><NavLink to="/service/subservice1">Web Development</NavLink></li>
                    <li><NavLink to="/service/subservice2">Mobile App Development</NavLink></li>
                    <li><NavLink to="/service/subservice3">Other Services</NavLink></li>
                </ul>
            </div>
            <div className="sitemap-section">
                <h2>Portfolio</h2>
                <ul className="list-unstyled">
                    <li><NavLink to="/portfolio">Go To Portfolio</NavLink></li>
                    <h6>Our Projects</h6>
                    <li>
                        <NavLink to="/portfolio/projectdetails/1" onClick={(e) => { e.preventDefault(); window.open('/portfolio/projectdetails/1', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            IT Solutions - Custom Website Development
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/projectdetails/2" onClick={(e) => { e.preventDefault(); window.open('/portfolio/projectdetails/2', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Banking Sector - Mobile Banking Application
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/projectdetails/3" onClick={(e) => { e.preventDefault(); window.open('/portfolio/projectdetails/3', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Retail Market - E-Commerce Website with AI-Powered Recommendations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/projectdetails/4" onClick={(e) => { e.preventDefault(); window.open('/portfolio/projectdetails/4', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Healthcare – Wellness Connect
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/projectdetails/5" onClick={(e) => { e.preventDefault(); window.open('/portfolio/projectdetails/5', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Learning Management - Custom Learning Management System (LMS)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/projectdetails/6" onClick={(e) => { e.preventDefault(); window.open('/portfolio/projectdetails/6', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Travel Firm - Custom CRM for Travel Agencies
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sitemap-section">
                <h2>BlogPage</h2>
                <ul className="list-unstyled">
                    <li><NavLink to="/blogpage">Go To Blog Page</NavLink></li>
                    <h6>Our Blogs</h6>
                    <li>
                        <NavLink to="/blogpage/subblogpage/0" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/0', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Explore the Latest in Web Development and Mobile App Development
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/1" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/1', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            AI-Driven Web Development: How AI is Shaping the Future of Websites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/2" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/2', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Dark Mode: Why It’s More Than Just a Trend in 2024 Web Design
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/3" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/3', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            The Rise of No-Code and Low-Code Development Platforms in 2024
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/4" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/4', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            JAMstack Revolution: The New Approach to Modern Web Development in 2024
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/5" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/5', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Immersive Design: Leveraging AR and VR for Next-Generation Websites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/6" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/6', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Why Accessibility is Non-Negotiable in Web Design for 2024
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/7" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/7', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            How 5G is Accelerating Mobile-First Web Development in 2024
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/8" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/8', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Headless CMS: The Key to Scalable and Flexible Web Solutions in 2024
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/9" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/9', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            5G and Beyond: How Next-Gen Networks are Transforming Mobile Technology in 2024
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/10" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/10', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            The Rise of Foldable Phones: Are They the Future of Mobile Devices?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/11" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/11', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            AI-Powered Mobile Apps: Revolutionizing User Experience in 2024
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/12" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/12', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Mobile Payment Trends in 2024: The Future of Cashless Transactions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/13" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/13', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Augmented Reality (AR) in Mobile: Enhancing Everyday Experiences in 2024
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/14" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/14', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Mobile Security in 2024: How to Stay Safe in an Increasingly Connected World
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/15" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/15', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Sustainable Smartphone Design: How Mobile Tech is Going Green in 2024
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/16" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/16', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Edge Computing and Mobile: Unlocking the Power of Real-Time Data Processing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/17" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/17', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            Wearable Tech in 2024: How Mobile Devices Are Integrating with the Internet of Things
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogpage/subblogpage/18" onClick={(e) => { e.preventDefault(); window.open('/blogpage/subblogpage/18', '_blank'); }}>
                            <img src={img} className='he' alt="" />
                            The Impact of 5G on Mobile App Development: What Developers Need to Know
                        </NavLink>
                    </li>
                </ul>
            </div>


            <div className="sitemap-section">
                <h2>Case Study</h2>
                <ul className="list-unstyled">
                    <h6>Our Case Studies</h6>
                    <li><NavLink onClick={openPdf}> <img src={img} className='he' alt="" />Case Study: AI-Powered Chatbots for Real-Time Customer Support</NavLink></li>
                </ul>
            </div>
            <div className="sitemap-section">
                <h2>Pricing</h2>
                <ul className="list-unstyled">
                    <li><NavLink to={"/pricing"} >Go To Pricing Page</NavLink></li>
                </ul>
            </div>
            <div className="sitemap-section">
                <h2>Other Links</h2>
                <ul className="list-unstyled">
                    <li><NavLink to="/termsandcondtion">Terms and Conditons</NavLink></li>
                    <li><NavLink to="/privacypolicy">Privacy Policy</NavLink></li>
                    <li><NavLink to="/cookiespolicy">Cookies Policy</NavLink></li>
                    <li><NavLink to="/aboutus">About us</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Sitemap;
