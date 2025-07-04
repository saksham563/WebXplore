"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Header, ProductItem } from "./Header";
import SearchRecommendation from "../SearchRecommendations/SearchRecommendations.jsx";
import weblogo from "../../assets/weblogo.png";
import s2 from "../../assets/s2img.png";
import photo1 from "../../assets/seo.png";
import photo2 from "../../assets/paymentgataway.png";
import photo3 from "../../assets/aiservice.png";
import photo4 from "../../assets/socialmedia.png";
import hi from "../../assets/portimg.png";
import about from "../../assets/aboutus.png";
import casestudy from "../../assets/casestudy.png";
import logo from "../../assets/logoimg.png";
import contact from "../../assets/contactus.png";
import pic1 from "../../assets/pic1.png";

export function HeaderData() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-0" />
            <div className="pt-20 w-full">
                {/* Your page content goes here */}
            </div>
        </div>
    );
}

function Navbar({ className }) {
    const [active, setActive] = useState(null); // Stores the active product item
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu
    const navigate = useNavigate();

    const resetHeaderState = () => {
        setSearchVisible(false);
        setSearchQuery("");
        setActive(null); // Reset active product item
        setMenuOpen(false); // Close mobile menu
    };

    const toggleSearch = () => {
        setSearchVisible(!searchVisible); // Toggle search bar visibility
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/home?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleHeaderHover = (item) => {
        setActive(item); // Set the active product item on hover
    };

    const handleHeaderClick = () => {
        setActive(null); // Close the ProductItem when clicking
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle mobile menu visibility
    };

    useEffect(() => {
        // Reset the header state when the user navigates
        return () => resetHeaderState();
    }, [navigate]);

    return (
        <div className={`fixed top-0 w-full z-50 bg-white shadow-md ${className}`}>
            <Menu setActive={setActive}>
                {/* Logo and Hamburger Icon */}
                <div className="flex items-center justify-between px-2 py-1 md:py-2">
                    <NavLink to="./home" onClick={resetHeaderState}>
                        <img src={logo} alt="Logo" className="h-12 md:h-20 w-auto" style={{ marginTop: "-20px", marginBottom: "-20px" }} />
                    </NavLink>
                    {/* Hamburger Icon */}
                    <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </div>
                </div>
{/* Search Bar */}
<div className="">
                    <div onClick={toggleSearch} className="cursor-pointer ml-4">
                        <FaSearch size={18} style={{ color: 'white' }} />
                    </div>
                    {searchVisible && (
                        <div className="absolute top-full mt-2  w-96 bg-white p-2 rounded-lg shadow-md">
                            <form onSubmit={handleSearchSubmit}>
                                <input
                                 
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="w-full p-2 border rounded"
                                />
                            </form>
                            {searchQuery && <SearchRecommendation query={searchQuery} />}
                        </div>
                    )}
                </div>
                {/* Full Menu for Larger Screens */}
                <div className={`hidden lg:flex space-x-4 text-sm `}>
                    {/* Menu Items */}
                    <NavLink
                        to="./home"
                        onClick={handleHeaderClick}
                        onMouseEnter={() => handleHeaderHover("home")}
                        style={{ textDecoration: "none" }}
                    >
                        <Header item="Home" />
                    </NavLink>
                    <NavLink
                        to="./service"
                        onClick={handleHeaderClick}
                        onMouseEnter={() => handleHeaderHover("services")}
                        style={{ textDecoration: "none" }}
                    >
                        <Header item="Services" active={active} setActive={setActive}>
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <ProductItem
                                    title="Web Development"
                                    to="/service/webdevelopment"
                                    src={weblogo}
                                    description="Build modern websites."
                                />
                                <ProductItem
                                    title="Mobile Development"
                                    to="/service/mobiledevelopment"
                                    src={s2}
                                    description="Create stunning mobile apps."
                                />
                                <ProductItem
                                    title="SEO"
                                    to="/service/SEO"
                                    src={photo1}
                                    description="Optimize search rankings."
                                />
                                <ProductItem
                                    title="Payment Gateway Integration"
                                    to="/service/PaymentGatewayIntegration"
                                    src={photo2}
                                    description="Integrate payment solutions."
                                />
                                <ProductItem
                                    title="AI Integration Services"
                                    to="/service/AI_Integration_Services"
                                    src={photo3}
                                    description="Leverage AI in your business."
                                />
                                <ProductItem
                                    title="Social Media Marketing Services"
                                    to="/service/SocialMediaMarketing"
                                    src={photo4}
                                    description="Boost your online presence."
                                />
                            </div>
                        </Header>
                    </NavLink>
                    {/* Other Menu Items */}
                    <NavLink to="./portfolio" onClick={handleHeaderClick} onMouseEnter={() => handleHeaderHover("portfolio")} style={{ textDecoration: "none" }}>
                        <Header item="Portfolio" active={active} setActive={setActive}>
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <ProductItem title="Portfolio" to="/portfolio" src={hi} description="Showcase your projects." />
                            </div>
                        </Header>
                    </NavLink>
                    <NavLink to="./casestudy" onClick={handleHeaderClick} onMouseEnter={() => handleHeaderHover("casestudy")} style={{ textDecoration: "none" }}>
                        <Header item="Case Study" active={active} setActive={setActive}>
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <ProductItem title="Case Study" to="/casestudy" src={casestudy} description="Detailed project insights." />
                            </div>
                        </Header>
                    </NavLink>
                    <NavLink to="./pricing" onClick={handleHeaderClick} onMouseEnter={() => handleHeaderHover("pricing")} style={{ textDecoration: "none" }}>
                        <Header item="Pricing" active={active} setActive={setActive}>
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <ProductItem title="Pricing" to="/pricing" src={pic1} description="Affordable plans." />
                            </div>
                        </Header>
                    </NavLink>
                    <NavLink to="./contact" onClick={handleHeaderClick} onMouseEnter={() => handleHeaderHover("contact")} style={{ textDecoration: "none" }}>
                        <Header item="Contact Us" active={active} setActive={setActive}>
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <ProductItem title="Contact Us" to="/contact" src={contact} description="Get in touch with us." />
                            </div>
                        </Header>
                    </NavLink>
                    <NavLink to="./aboutus" onClick={handleHeaderClick} onMouseEnter={() => handleHeaderHover("aboutus")} style={{ textDecoration: "none" }}>
                        <Header item="About Us" active={active} setActive={setActive}>
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <ProductItem title="About Us" to="/about" src={about} description="Learn about us." />
                            </div>
                        </Header>
                    </NavLink>
                </div>

                {/* Dropdown Menu for Smaller Screens */}
                <div
    className={`lg:hidden transition-all duration-300 fixed top-0 w-full bg-black text-white shadow-md z-50`}
>
    <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <NavLink to="./home" onClick={handleHeaderClick}>
            <img src={logo} alt="Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Right Section (Menu + Search Icon) */}
        <div className="flex items-center space-x-4">
            {/* Search Icon and Dropdown */}
            <div className="relative">
                <div onClick={toggleSearch} className="cursor-pointer">
                    <FaSearch size={20} className="text-white hover:text-gray-400 transition duration-200" />
                </div>
            
            </div>

            {/* Menu Toggle Button */}
            <div className="cursor-pointer" onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={20} className="text-white" /> : <FaBars size={20} className="text-white" />}
            </div>
        </div>
    </div>

    {/* Compact Menu Items */}
    {menuOpen && (
        <div className="bg-gray-900 text-gray-300 shadow-md">
            <div className="flex flex-col space-y-4 px-4 py-3">
                <NavLink
                    to="./home"
                    onClick={handleHeaderClick}
                    className="hover:text-white transition duration-200"
                >
                    Home
                </NavLink>
                <NavLink
                    to="./service"
                    onClick={handleHeaderClick}
                    className="hover:text-white transition duration-200"
                >
                    Services
                </NavLink>
                <NavLink
                    to="./portfolio"
                    onClick={handleHeaderClick}
                    className="hover:text-white transition duration-200"
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="./casestudy"
                    onClick={handleHeaderClick}
                    className="hover:text-white transition duration-200"
                >
                    Case Study
                </NavLink>
                <NavLink
                    to="./pricing"
                    onClick={handleHeaderClick}
                    className="hover:text-white transition duration-200"
                >
                    Pricing
                </NavLink>
                <NavLink
                    to="./contact"
                    onClick={handleHeaderClick}
                    className="hover:text-white transition duration-200"
                >
                    Contact Us
                </NavLink>
                <NavLink
                    to="./aboutus"
                    onClick={handleHeaderClick}
                    className="hover:text-white transition duration-200"
                >
                    About Us
                </NavLink>
            </div>
        </div>
    )}
</div>



                
            </Menu>
        </div>
    );
}